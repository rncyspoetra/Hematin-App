import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, AlertCircle, ArrowRight } from "lucide-react";

const NotFoundOverview = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/question");
  };
  return (
    <div className="w-full py-30 px-4 bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative overflow-hidden" data-aos="fade-up">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        <div className="relative mb-6">
          <div className="relative bg-blue-100 rounded-full p-6 inline-block">
            <FileText className="w-16 h-16 text-blue-500 animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Formulir Kosong
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Anda belum mengisi formulir prediksi. Silakan lengkapi formulir
          terlebih dahulu untuk melanjutkan.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 text-sm font-medium">
              Semua field harus diisi untuk mendapatkan prediksi yang akurat
            </span>
          </div>
        </div>

        <button
          onClick={handleBack}
          className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Isi Formulir Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </button>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default NotFoundOverview;
