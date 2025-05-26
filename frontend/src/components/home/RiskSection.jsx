import React from "react";

const RiskCard = ({ icon , title, desc }) => {
  return (
    <div
      className="w-full lg:w-1/3 mx-auto rounded-xl shadow-md border border-gray-200 overflow-hidden bg-white transition-transform hover:scale-[1.05]"
      data-aos="zoom-in"
    >
      <div className="bg-[linear-gradient(90deg,_rgba(98,240,211,1)_0%,_rgba(15,180,245,1)_100%)] h-2 w-full"></div>
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
};

const RiskSection = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        <div className="w-full md:w-2/3 text-center space-y-4">
          <h5 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
            Faktor Boros <span className="text-[#5AA9E6]">Pengeluaran</span>
          </h5>
          <p className="text-gray-700">
            Kenali faktor-faktor yang dapat meningkatkan pengeluaran anda.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-3/4 md:w-full gap-6">
          <RiskCard
            icon= "💳"
            title="Langganan"
            desc="Biaya langganan seperti Netflix, Spotify, atau aplikasi lainnya sering kali terabaikan. Evaluasi dan hentikan yang tidak terpakai untuk menghemat pengeluaran."
          />
          <RiskCard
            icon="🍽️"
            title="Makan"
            desc="Makan di luar rumah bisa menguras pengeluaran bulanan. Memasak di rumah dan membawa bekal bisa membantu menghemat banyak."
          />
          <RiskCard
            icon="🚌"
            title="Transportasi"
            desc="Biaya bensin, parkir, atau transportasi umum bisa tinggi. Gunakan transportasi yang lebih hemat atau ramah lingkungan seperti sepeda atau carpooling."
          />
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
