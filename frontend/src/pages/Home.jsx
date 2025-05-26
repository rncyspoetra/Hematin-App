import React from "react";
import BannerSection  from "../components/home/BannerSection.jsx";
import HowItWorksSection from "../components/home/HowItWorksSection.jsx";
import RiskSection from "../components/home/RiskSection.jsx";
import FinanceRiskAnalysisSection from "../components/home/FinanceRiskAnalysisSection.jsx";
import CtaSection from "../components/home/CtaSection.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <HowItWorksSection />
      <RiskSection />
      <FinanceRiskAnalysisSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
