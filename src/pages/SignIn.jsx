import React from 'react';
import welcome from '../assets/images/welcome.png';
import { Link } from 'react-router-dom';
// Import Navbar and Footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <div className="flex-grow flex items-center  justify-center  py-12 px-4">
        <div className="max-w-5xl w-full bg-emerald-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-extrabold text-orange-500 mb-2">Hello Admin</h2>
                
                
                <div className="space-y-6">
                  <div>
                    <label className="block font-extrabold text-sm  text-black mb-2">
                      Email 
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2  focus:border-transparent outline-none transition"
                      placeholder="Example@Email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-black mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2  focus:border-transparent outline-none transition"
                      placeholder="At least 8 characters"
                    />
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <label className="flex items-center">
                    </label>
                    <a href="#forgot" className="text-sm text-orange-600 hover:text-orange-700">
                      Forgot password?
                    </a>
                  </div>

                  <button className="w-full bg-orange-700 text-white py-3 rounded-xl font-semibold hover:bg-orange-800 transition duration-200 shadow-lg hover:shadow-xl">
                    Sign In
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <Link  to="/signup" className="text-orange-500 hover:text-orange-600 font-semibold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-emerald-100 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className=" mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <img 
                  src={welcome} 
                  className="w-full h-auto md:w-full md:h-auto object-contain"
                  alt="Welcome Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignIn; 