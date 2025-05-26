import React from "react";
import BannerPicture from "../../assets/Banner.png";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const BannerSection = () => {
  return (
    <section className="relative w-full h-screen bg-[#AEEBFF] py-12 flex items-center justify-center">
      <div
        className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 text-[#2a2a2a]">
            PREDIKSI KEUANGAN ANDA.<br />
            Mulailah Menabung dengan Lebih Cerdas.
          </h1>
          <p className="text-[#2a2a2a] mb-6 md:w-2/3 w-full lg:w-full mx-auto">
            Aplikasi ini membantu Anda merencanakan pengeluaran dan menabung
            secara otomatis dengan bantuan Teknologi Machine Learning.
          </p>
          <Link
            to="/question"
            className="inline-flex items-center gap-2 text-[#5AA9E6] bg-[#f9f9f9] font-semibold py-3 px-6 rounded-lg shadow-md border-2 border-transparent hover:bg-[#5AA9E6] hover:text-[#f9f9f9] hover:border-white transition duration-300"
          >
            Mulai Prediksi
            <ArrowRightIcon className="w-5 h-5 text-current" />
          </Link>
        </div>
        <div
          className="w-3/4 lg:w-1/2 mt-10 md:mt-0 text-center flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={BannerPicture}
            alt="Financial Planning Image"
            className="w-3/4"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default BannerSection;
