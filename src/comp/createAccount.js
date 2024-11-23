import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    lname: '',
    email: '',
    num: '',
    pass: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    if(formData.rememberMe === true ){
        try {
            const response = await axios.post('http://localhost:8000/accountCreate', formData);
            alert('Registration successful!');
            console.log('Server Response:', response.data);
          } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
          }
        }else{
            alert('checkbox');

        }
    }

    
    

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="#">
            <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-40 inline-block" />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="name"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter first name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lname"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter last name"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Phone Number</label>
              <input
                name="num"
                type="tel"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter phone number"
                value={formData.num}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="pass"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                value={formData.pass}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="#" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center"> Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline ml-1"> <Link to={'/Login'}> Login here </Link></a></p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
