import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ekitiLogo from '../assets/images/ekitiLogo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="  rounded-lg flex items-center justify-center ">
              <img
                src={ekitiLogo}
                alt="App Logo"
                className="w-16 h-16"
              />
            </div>
            <span className="text-white text-2xl font-bold">EKITI MSME ICT HUB</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/home" className="text-black border border-yellow-300 rounded-md bg-yellow-300 hover:bg-white/20 px-4 py-2 rounded-md transition-colors text-xs font-bold">
              Home
            </Link>
            <Link to="/dashboard" className="text-black border border-yellow-300 rounded-md bg-yellow-300 hover:bg-white/20 px-4 py-2 rounded-md transition-colors text-xs font-bold">
              Dashboard
            </Link>
            <a href="#attendance" className="text-black border border-yellow-300 rounded-md bg-yellow-300 hover:bg-white/20 px-4 py-2 rounded-md transition-colors text-xs font-bold">
              Mark Attendance
            </a>
            <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-white to-transparent"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 4px, transparent 4px, transparent 8px)'
                 }}>
            </div>
            <Link to="/adminpage" className="text-black border border-yellow-300 rounded-md bg-yellow-300 hover:bg-white/20 px-4 py-2 rounded-md transition-colors text-xs font-bold">
              Admin
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="py-4 space-y-1">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-white/20 px-4 py-3 rounded-md transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#enroll"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-white/20 px-4 py-3 rounded-md transition-colors font-medium"
            >
              Enroll
            </a>
            <a
              href="#attendance"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-white/20 px-4 py-3 rounded-md transition-colors font-medium"
            >
              Mark Attendance
            </a>
            <div className="h-0.5 mx-auto w-4/5"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(to right, white 0, white 4px, transparent 4px, transparent 8px)'
                 }}>
            </div>
            <a
              href="#admin"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:bg-white/20 px-4 py-3 rounded-md transition-colors font-medium"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;