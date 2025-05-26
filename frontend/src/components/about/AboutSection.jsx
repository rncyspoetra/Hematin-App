import React from "react";
import PictAccountan from "../../assets/Pict_Accountan.png";
import { ChartBarIcon, CpuChipIcon, UserIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {
  return (
    <div className="w-full py-10 px-2 bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 p-6">
        <div
          className="lg:w-1/2 w-full"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <h5 className="text-[#5AA9E6] text-base font-semibold my-2">
            Tentang Website
          </h5>
          <h3 className="md:text-3xl text-xl font-bold my-4">
            Prediksi Pengeluaran dan Rekomendasi Berhemat Berbasis Machine
            Learning
          </h3>
          <p className="text-sm mb-6">
            Website ini bertujuan untuk memprediksi pengeluaran bulanan Anda
            dengan bantuan machine learning canggih, yang menganalisis berbagai
            kebiasaan finansial Anda.
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-2 rounded-lg transition-shadow duration-300">
              <ChartBarIcon className="w-12 h-12 text-white bg-blue-300 rounded-lg p-2" />
              <div>
                <h3 className="font-semibold text-lg">
                  Analisis Data Keuangan Komprehensif
                </h3>
                <p className="text-sm">
                  Kami mengolah 4 jenis pengeluaran rutin untuk memberikan
                  prediksi yang akurat dan personal.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 rounded-lg transition-shadow duration-300">
              <CpuChipIcon className="w-12 h-12 text-white bg-blue-300 rounded-lg p-2" />
              <div>
                <h3 className="font-semibold text-lg">
                  Algoritma Machine Learning yang Terbukti
                </h3>
                <p className="text-sm">
                  Model kami dilatih dengan data keuangan nyata untuk
                  menghasilkan saran penghematan yang realistis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-2 rounded-lg transition-shadow duration-300">
              <UserIcon className="w-12 h-12 text-white bg-blue-300 rounded-lg p-2" />
              <div>
                <h3 className="font-semibold text-lg">
                  Prediksi yang Dipersonalisasi
                </h3>
                <p className="text-sm">
                  Algoritma kami menyesuaikan hasil analisis dengan pola
                  pengeluaran Anda untuk memberikan saran yang relevan dan mudah
                  diterapkan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full flex justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={PictAccountan}
            alt="Accountant Illustration Image"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
