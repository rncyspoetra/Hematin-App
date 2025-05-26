import React from "react";
import { AlertCircle, Home, RotateCcw } from "lucide-react";

const NotFoundResult = () => {
  return (
    <div className="w-full py-10 px-2 bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center">
            <div className="bg-red-50 rounded-full p-4">
              <AlertCircle className="w-16 h-16 text-red-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Data Tidak Ditemukan
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Maaf, data prediksi yang Anda cari tidak dapat ditemukan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundResult;
