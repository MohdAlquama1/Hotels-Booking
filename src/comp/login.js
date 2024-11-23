import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
const Login = () => {
  ReactSession.setStoreType("localStorage"); // Configure storage
  const navigate = useNavigate(); // Using `useNavigate` to navigate programmatically
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !pass) {
      setMessage("Please enter both email and password.");
      alert("Please enter both email and password.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/login', { email, pass });

      // Set the message and display it in an alert
      setMessage(response.data.msg);
      alert(response.data.msg); 

      // Set session data using ReactSession
      ReactSession.set("LoginDetails", response.data.LoginDetal);

      // Navigate to home page after login
      navigate("/"); 
    } catch (error) {
      if (error.response) {
        // Handle errors from the server response
        const errorMsg = error.response.data.msg || 'Account not found';
        setMessage(errorMsg);
        alert(errorMsg); // Display alert with error message
      } else {
        // Handle connection errors
        const connectionError = 'Error: Unable to connect to the server';
        setMessage(connectionError);
        alert(connectionError);
      }
    }
  }
  
  

  return (
<div class="bg-gray-50 font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div class="max-w-md w-full">
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-40 mb-8 mx-auto block' />
          </a>

          <div class="p-8 rounded-2xl bg-white shadow">
            <h2 class="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form class="mt-8 space-y-4">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">User email</label>
                <div class="relative flex items-center">
                  <input 
                      name="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                       required class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input  name="password" 
                      type="password" 
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}required class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                 
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a href="jajvascript:void(0);" class="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div class="!mt-8">
                <button type="button" onClick={handleSubmit} class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Sign in
                </button>
              </div>
              <p class="text-gray-800 text-sm !mt-8 text-center"> Don't have an account? <a  href="javascript:void(0);" class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"><Link to={'/createAccount'}>hhh</Link> Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
