import React from "react";
import axios from "axios";
import { useState } from "react";
import { useQuizStore } from "../../store/store";
import { segmentQuestion } from "../../data";
import { useNavigate } from "react-router-dom";
import NotFoundOverview from "./NotFoundOverview";
import { Loader } from "../Loader";

const OverviewSection = () => {
  const { answers } = useQuizStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:2000/predictions",
        answers
      );
      navigate(`/result/${res.data.data.id}`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/question");
  };

  const isEmpty = Object.values(answers).every((v) => !v || v === "");

  if (isEmpty) {
    return <NotFoundOverview />;
  }

  return (
    <>
    {loading && <Loader />}
      <div className="w-full py-30 px-4 bg-gray-100 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow p-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-indigo-900">
              Tinjau jawaban Anda
            </h1>
            <p className="text-sm text-gray-600">
              Untuk melanjutkan, tekan tombol di bagian bawah untuk membuat
              laporan Anda. Anda tidak akan dapat mengubah jawaban Anda setelah
              langkah ini.
            </p>
          </div>

          {segmentQuestion.map((seg, i) => (
            <div key={i} className="border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {seg.title}
                </h3>
              </div>
              <div className="space-y-2">
                {seg.input.map((inp, j) => (
                  <div key={j}>
                    <p className="text-sm text-gray-900">{inp.label}</p>
                    <p className="text-base text-gray-500 font-medium">
                      {inp.satuan == "Rp. " ? inp.satuan : ""}{" "}
                      {answers[inp.name] || "-"}{" "}
                      {inp.satuan == "Tahun" ? inp.satuan : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-10">
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 cursor-pointer"
            >
              Kembali Isi Form
            </button>
            <button
              onClick={handleSubmit}
              className="font-semibold flex items-center gap-2 px-4 py-2 bg-[#f9f9f9] text-[#5AA9E6] rounded-md border-2 border-[#5AA9E6] hover:bg-[#5AA9E6] hover:border-transparent hover:text-[#f9f9f9] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
