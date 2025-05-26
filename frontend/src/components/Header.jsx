import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoPicture from "../assets/Logo_Picture.png";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-5 left-0 z-50" data-aos="fade-down">
      <div className="w-3/4 lg:w-1/2 bg-[rgba(236,232,232,0.4)] rounded-xl backdrop-blur-[5px] mx-auto px-6 py-2 flex items-center justify-between shadow-md">
        <div className="flex-shrink-0">
          <img src={LogoPicture} alt="Logo" className="md:h-10 h-7" />
        </div>
        <nav className="hidden md:flex space-x-8 text-lg items-center justify-center">
          <Link
            to="/"
            className="relative text-black text-base font-medium transition-all duration-300 hover:text-blue-700 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative text-black text-base font-medium transition-all duration-300 hover:text-blue-700 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/faq"
            className="relative text-black text-base font-medium transition-all duration-300 hover:text-blue-700 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/question"
            className="hidden md:block bg-[#5AA9E6] text-white py-1 px-6 rounded-lg shadow-md border-2 border-transparent hover:bg-[#f9f9f9] hover:text-[#5AA9E6] hover:border-[#5AA9E6] transition duration-300"
          >
            Prediksi
          </Link>
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 w-3/4 lg:w-1/2 mx-auto bg-[rgba(236,232,232,0.4)] backdrop-blur-[5px] rounded-lg shadow px-6 py-4 space-y-4 text-center">
          <Link
            to="/"
            className="block text-black text-base px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-black text-base px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/faq"
            className="block text-black text-base px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/question"
            className="block text-black text-base px-4 py-2 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Prediksi
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
