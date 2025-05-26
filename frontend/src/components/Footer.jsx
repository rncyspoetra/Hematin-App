import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t py-4 text-center text-gray-500 text-sm">
      <p>
        © {new Date().getFullYear()} CC25-CF152 - Coding Camp by DBS Foundation.
      </p>
    </footer>
  );
};

export default Footer;
