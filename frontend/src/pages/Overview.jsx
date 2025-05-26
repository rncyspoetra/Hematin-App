import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import OverviewSection from '../components/overview/OverviewSection.jsx';

const Overview = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <OverviewSection />
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
