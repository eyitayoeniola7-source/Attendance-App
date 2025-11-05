import React from 'react';
import ekitiLogo from '../assets/images/ekitiLogo.png';
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto  px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          
          
          <div className="flex gap-6 items-center">
            <img 
              src={ekitiLogo}
              alt="logo" 
              className="w-20 h-20 object-contain mb-2"
            />
            <p className="text-white font-bold text-sm ">Powered By</p>
          </div>

          
          <div className="border-l-2  border-white h-8"></div>

          {/* Wakocode Link */}
          <a href="#wakocode" className="text-white underline hover:text-gray-300 transition font-medium">
            Wakocode
          </a>

          {/* Dotted Line */}
          <div className="border-l-2 border-white h-8"></div>

          {/* Terms Link */}
          <a href="#terms" className="text-white underline hover:text-gray-300 transition font-medium">
            Terms and Conditions
          </a>

          {/* Dotted Line */}
          <div className="border-l-2  border-white h-8"></div>

          {/* Copyright */}
          <p className="text-white font-medium">&copy; 2025 All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;