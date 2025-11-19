import React, { useState } from 'react';
import axios from 'axios';
import welcome from '../assets/images/welcome.png';
import { Link, useNavigate } from 'react-router-dom';
// Import Navbar and Footer components
import Navbar from './Navbar';
import Footer from './Footer';

const SignIn = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
   const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
     if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("/api/v1/auth/signin",
      formData
      );

        console.log('Sign In Response:', response.data);
      
      // Store the token if provided
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }


    // Store user data if needed
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      alert('Sign in successful!');
      
      // Redirect to dashboard
      navigate('/dashboard');
      
    } catch (err) {
      console.error('Sign In Error:', err);
      setError(
        err.response?.data?.message || 
        'Failed to sign in. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      
      <div className="flex-grow flex items-center  justify-center  py-12 px-4">
        <div className="max-w-5xl w-full bg-cyan-50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-extrabold text-orange-500 mb-2">Hello Admin</h2>
                
                 {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}
                  
                 <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                  
                    <label className="block font-extrabold text-sm  text-black mb-2">
                      Email 
                    </label>
                    <input
                    name='email'
                      type="email"
                       value={formData.email}
                       onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2  focus:border-transparent outline-none transition"
                      placeholder="Example@Email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-black mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name='password'
                          value={formData.password}
                          onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2  focus:border-transparent outline-none transition"
                      placeholder="At least 8 characters"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <label className="flex items-center">
                    </label>
                    <a href="#forgot" className="text-sm text-orange-600 hover:text-orange-700">
                      Forgot password?
                    </a>
                  </div>

                  <button 
                   disabled={loading}
                   type="submit"
                  className="w-full bg-orange-700 text-white py-3 rounded-xl font-semibold hover:bg-orange-800 transition duration-200 shadow-lg hover:shadow-xl">
                   {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                 
                  <p className="text-center text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <Link  to="/signup" className="text-orange-500 hover:text-orange-600 font-semibold">
                      Sign Up
                    </Link>
                  </p>
                 </form>
                </div>
              </div>
              
                
             

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-cyan-50 p-8 md:p-12 flex items-center justify-center">
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