import React from "react";
import { Link } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const CtaSection = () => {
  return (
    <div className="w-full py-10 bg-[#AEEBFF]">
      <div className="max-w-6xl mx-auto justify-center flex" data-aos="fade-up">
        <div className="text-center space-y-4 w-full md:w-2/3 p-4">
          <h1 className="font-bold text-2xl">
            Amankan Keuangan Anda Bulan Depan
          </h1>
          <p className="text-sm font-thin">
            Deteksi dan atasi sumber pengeluaran yang tidak perlu. Dapatkan
            prediksi pengeluaran dan rekomendasi berhemat yang dipersonalisasi
            untuk masa depan finansial yang lebih sehat.
          </p>
          <Link
            to="/question"
            className="inline-flex items-center gap-3 bg-[#f9f9f9] text-[#5AA9E6] text-base font-semibold py-2 px-7 rounded border-2 border-transparent transition duration-300 hover:bg-[#5AA9E6] hover:text-[#f9f9f9] hover:border-white hover:shadow-lg hover:scale-105"
          >
            <CurrencyDollarIcon className="h-5 w-5" />
            Mulai Prediksi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
