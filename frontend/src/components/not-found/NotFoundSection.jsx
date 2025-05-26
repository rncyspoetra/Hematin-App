import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, RotateCcw } from "lucide-react";

const NotFoundSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-10 px-2 bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFoundSection;
