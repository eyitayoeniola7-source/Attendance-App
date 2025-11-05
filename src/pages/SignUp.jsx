import React from 'react';
import welcome from '../assets/images/welcome.png';
import { Link } from 'react-router-dom';
// Import Navbar and Footer components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-5xl w-full  bg-emerald-100 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign Up</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                       Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email 
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Example@Email.Com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="At least 8 characters"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Re-Enter Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Re-enter your password"
                    />
                  </div>



                  <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-200 shadow-lg hover:shadow-xl">
                    Sign Up
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-orange-500 hover:text-orange-600 font-semibold">
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-emerald-100 p-8 md:p-12 flex items-center justify-center">
              <img src={welcome} className="w-full h-auto md:w-full md:h-auto object-contain"
              alt="Welcome Image" /> 
          
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default SignUp;