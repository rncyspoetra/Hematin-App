import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../../store/store";
import { segmentQuestion } from "../../data";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

const QuestionSection = () => {
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { answers, setAnswer, resetAnswers } = useQuizStore();

  useEffect(() => {
    resetAnswers();
  }, []);

  const segment = segmentQuestion[step];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswer(name, value);
  };

  const handleNext = () => {
    const newErrors = {};

    segment.input.forEach((inp) => {
      const val = answers[inp.name];
      if (val === undefined || val === "") {
        newErrors[inp.name] = "Tidak boleh kosong";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (step === segmentQuestion.length - 1) {
      const {
        income,
        weekly_food_spending,
        weekly_transport_spending,
        fixed_expenses,
        last_month_spending,
      } = answers;

      const food = parseFloat(weekly_food_spending ?? 0) * 4;
      const transport = parseFloat(weekly_transport_spending ?? 0) * 4;
      const fixed = parseFloat(fixed_expenses ?? 0);
      const incomeVal = parseFloat(income ?? 0);
      const lastSpending = parseFloat(last_month_spending ?? 0);

      if (incomeVal < food + transport + fixed) {
        toast.error(
          "Pendapatan Anda lebih kecil dari total kebutuhan bulanan, Silahkan input form ulang.",
          { icon: <AlertTriangle className="text-red-500 w-5 h-5" /> }
        );
        return;
      }

      if (incomeVal < lastSpending) {
        toast.error(
          "Pendapatan Anda bulan ini lebih kecil dari pengeluaran bulan lalu.",
          { icon: <AlertTriangle className="text-red-500 w-5 h-5" /> }
        );
        return;
      }

      const savings_last_month = incomeVal - lastSpending;
      setAnswer("savings_last_month", savings_last_month);

      navigate("/question/overview");
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-full py-10 px-4 bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 space-y-6" data-aos="fade-up">
        <Progress
          value={((step + 1) / segmentQuestion.length) * 100}
          className="h-3 bg-blue-200 w-25 text-right"
        />

        <div className="space-y-5">
          <h1 className="text-2xl font-semibold">
            {segment.title}
          </h1>
          <p className="text-gray-700 font-medium">{segment.desc}</p>
        </div>

        <form>
          {segment.input.map((inp, idx) => (
            <div key={idx} className="mb-6">
              <label
                htmlFor={inp.name}
                className="block font-semibold text-gray-900"
              >
                {inp.label}
              </label>
              {inp.contoh && <p className="text-gray-500 text-sm">Contoh : {inp.contoh}</p>}

              {inp.type === "select" ? (
                <select
                  name={inp.name}
                  value={answers[inp.name] ?? ""}
                  onChange={handleChange}
                  id={inp.name}
                  className={`mt-2 w-full px-4 py-2 border ${
                    errors[inp.name] ? "border-red-500" : "border-blue-600"
                  } rounded-md text-gray-700 focus:outline-none focus:ring-2 ${
                    errors[inp.name]
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                >
                  <option value="">Pilih...</option>
                  {inp.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={inp.type}
                  name={inp.name}
                  value={answers[inp.name] ?? ""}
                  id={inp.name}
                  onChange={handleChange}
                  className={`mt-2 w-full px-4 py-2 border font-medium ${
                    errors[inp.name] ? "border-red-500" : "border-blue-600"
                  } rounded-md text-gray-700 focus:outline-none focus:ring-2 ${
                    errors[inp.name]
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
              )}

              {errors[inp.name] && (
                <p className="text-red-600 text-sm mt-1">{errors[inp.name]}</p>
              )}
            </div>
          ))}

          <div className="flex justify-between mt-8 ">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="font-semibold flex items-center gap-2 px-3 py-2 bg-[#f9f9f9] text-[#5AA9E6] rounded-md border-2 border-[#5AA9E6] hover:bg-[#5AA9E6] hover:border-transparent hover:text-[#f9f9f9] cursor-pointer"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Kembali
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="font-semibold flex items-center gap-2 px-3 py-2 bg-[#5AA9E6] text-white rounded-md border-2 border-transparent hover:bg-[#f9f9f9] hover:border-[#5AA9E6] hover:text-[#5AA9E6] cursor-pointer"
            >
              {step === segmentQuestion.length - 1 ? "Submit" : "Lanjutkan"}
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionSection;
