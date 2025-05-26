import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FAQSection from "../components/faq/FAQSection.jsx";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
