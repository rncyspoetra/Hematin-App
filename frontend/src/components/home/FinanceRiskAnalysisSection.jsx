import React from "react";
import PictAnalyst1 from "../../assets/PictAnalyst1.png";
import PictAnalyst2 from "../../assets/PictAnalyst2.png";
import PictAnalyst3 from "../../assets/PictAnalyst3.png";

const FinanceCard = ({ image, alt, title, desc }) => (
  <div
    className="p-6 flex gap-5 md:flex-row flex-col text-center md:text-left items-center justify-center"
    data-aos="fade-up"
  >
    <div className="flex justify-center">
      <div className="w-50 h-50 bg-blue-50 rounded-full flex items-center justify-center shadow">
        <img src={image} alt={alt} className="w-1/2 object-contain" />
      </div>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-lg font-semibold text-[#5AA9E6] mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </div>
  </div>
);

const FinanceRiskAnalysisSection = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center space-y-4 w-full md:w-2/3">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#5AA9E6]">
            Bagaimana Kami Menganalisis{" "}
            <span className="text-gray-800">Finansial Anda? </span>
          </h2>
          <p className="text-gray-600 text-base">
            Teknologi kami memanfaatkan data keuangan Anda untuk mendeteksi
            potensi pemborosan dan memberikan rekomendasi agar keuangan Anda
            tetap sehat.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center">
          <FinanceCard
            title="Analisis Pola Pengeluaran"
            desc="Kami mengidentifikasi kebiasaan data pengeluaran bulan sebelumnya, termasuk kategori seperti makan, langganan, hiburan, dan transportasi."
            image={PictAnalyst1}
            alt="Checklist Keuangan"
          />
          <FinanceCard
            title="Prediksi Risiko Finansial"
            desc="Dengan menggunakan model machine learning, sistem kami memprediksi apakah Anda berisiko mengalami pengeluaran berlebih di bulan depan berdasarkan data historis Anda."
            image={PictAnalyst2}
            alt="Grafik analisis"
          />
          <FinanceCard
            title="Saran & Rekomendasi Hemat"
            desc="Berdasarkan hasil analisis, kami memberikan saran yang dapat ditindaklanjuti seperti memangkas langganan tidak terpakai atau mengurangi jajan harian untuk meningkatkan tabungan Anda."
            image={PictAnalyst3}
            alt="Saran keuangan"
          />
        </div>
      </div>
    </section>
  );
};

export default FinanceRiskAnalysisSection;
