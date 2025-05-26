import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AboutSection from "../components/about/AboutSection.jsx";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
