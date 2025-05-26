import React from 'react';
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import NotFoundSection from '../components/not-found/NotFoundSection.jsx';

const NotFound = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <NotFoundSection />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
