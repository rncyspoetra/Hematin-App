import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ResultSection from "../components/result/ResultSection.jsx";

const Result = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <ResultSection />
      </div>
      <Footer />
    </div>
  );
};

export default Result;
