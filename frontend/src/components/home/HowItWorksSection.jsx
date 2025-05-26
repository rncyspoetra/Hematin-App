import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";

const HowItWorksCard = ({ number, title, desc }) => {
  return (
    <CarouselItem
      className="basis-full md:basis-1/3 flex justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-md w-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.05] transition duration-300">
        <div className="bg-[#BDEAFF] w-12 h-12 flex items-center justify-center rounded-full">
          <p className="text-lg font-bold text-blue-900">{number}</p>
        </div>
        <hr className="bg-[#BDEAFF] h-1 opacity-50 w-full" />
        <h6 className="text-xl font-bold">{title}</h6>
        <p className="text-sm font-medium text-gray-800">{desc}</p>
      </div>
    </CarouselItem>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <div className="w-full md:w-1/2 mx-auto text-center space-y-4">
          <h5 className="text-3xl font-bold">
            Bagaimana <span className="text-[#5AA9E6]">Cara Kerjanya?</span>
          </h5>
          <p className="text-gray-700">
            Proses sederhana 3 langkah untuk mendapatkan prediksi pengeluaran
            bulan depan dan rekomendasi untuk berhemat Anda.
          </p>
        </div>
        <div className="relative w-full">
          <Carousel className="relative">
            <CarouselContent className="flex flex-nowrap p-6">
              <HowItWorksCard
                number={"1"}
                title={"Masukkan Data Anda"}
                desc={
                  "Masukkan data pengeluaran rutin seperti makan, transportasi, dan kebutuhan lainnya hanya dalam waktu 5 menit."
                }
              />
              <HowItWorksCard
                number={"2"}
                title={"Analisis ML"}
                desc={
                  "Model ML kami menganalisis data menggunakan algoritma untuk menghitung prediksi dan rekomendasi."
                }
              />
              <HowItWorksCard
                number={"3"}
                title={"Dapatkan Hasil"}
                desc={
                  "Terima hasil laporan tentang prediksi pengeluaran bulan depan dan rekomendasi berhemat"
                }
              />
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
