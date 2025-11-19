import React, { useState } from 'react';
import axios from 'axios';
import welcome from '../assets/images/welcome.png';
import { Link, useNavigate } from 'react-router-dom';
// Import Navbar and Footer components
import Navbar from './Navbar';
import Footer from './Footer';

const SignUp = () => {
   const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: '',
    email: '',
    track: '',
    password: '',
    reenterpassword: ''
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
    
    // Check if passwords match
    if (formData.password !== formData.reenterpassword) {
      setError('Passwords do not match!');
      setLoading(false)
      return;
    }
    
   // Validate password length
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }
    
    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.track || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    
    try {
      // Prepare data for API (remove reenterpassword)
       const { reenterpassword: _, ...signupData } = formData;
      
      const response = await axios.post(
        "/api/v1/auth/signup",
        signupData
      );

      console.log('Sign Up Response:', response.data);
      
      // Store token if provided
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }

      // Store user data if provided
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      alert('Account created successfully!');
      
      // Redirect to dashboard or signin
      navigate('/dashboard');
      
    } catch (err) {
      console.error('Sign Up Error:', err);
      console.log('Error response data:', err.response?.data);

      if (err.response) {
        // Server responded with error
        setError(err.response.data?.message || 'Failed to create account. Please try again.');
      } else if (err.request) {
        // Request made but no response
        setError('Cannot connect to server. Please check your internet connection.');
      } else {
        // Something else happened
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen flex flex-col">
      
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-3xl w-full  bg-cyan-50 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-5xl font-bold text-gray-800 mb-2">Sign Up</h2>

                   
                {error && (
                  <div className="mb-4 mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                       Name
                    </label>
                    <input
                      type="text"
                       name="name"
                       required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Example@Email.Com"
                    />
                  </div>

                  <div>
                    <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
                      Track
                    </label>
                    <select
                       id="track"
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Select Track"
                      >
                      <option value="">Select Track</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Backend Development">Backend Development</option>
                      <option value="Fullstack Development">Fullstack Development</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                   </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                       type="password"
                       name="password"
                       value={formData.password}
                       onChange={handleChange}
                       required
                      disabled={loading}
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
                      value={formData.reenterpassword}
                      onChange={handleChange}
                      name="reenterpassword"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Re-enter your password"
                    />
                  </div>



                  <button 
                    type='submit'
                    disabled={loading}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Creating Account...' : 'Sign Up'}
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-orange-500 hover:text-orange-600 font-semibold">
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 bg-cyan-50 p-8 md:p-12 flex items-center justify-center">
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