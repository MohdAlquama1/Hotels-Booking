import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ReactSession } from 'react-client-session';

const BookingPageByHotelOrUserID = () => {
  const [fullName, setFullName] = useState('');
  const [nights, setNights] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [aadhaarNo, setAadhaarNo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { id } = useParams();
  const [hotel, setHotel] = useState(null); // Changed to hold single hotel data

  console.log(hotel);
  
  ReactSession.setStoreType("localStorage");
  const loginDetails = ReactSession.get("LoginDetails");

  const profile = {
    userIdOfProfile: loginDetails?.id,
    name: loginDetails?.name,
    lastName: loginDetails?.lname,
    phone: loginDetails?.num,
    email: loginDetails?.email,
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/hotelBooking/${id}`)
        .then((res) => {
          console.log(res.data);
          setHotel(res.data); // Assuming response is an object for a single hotel
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/hotelBooking', {
  //       userId: profile.userIdOfProfile,
  //       name: profile.name,
  //       lastName: profile.lastName,
  //       email: profile.email,
  //       hotelName: hotel.hotelName,
  //       hotelType: hotel.hotelType,
  //       city: hotel.city,
  //       hotelPrice: hotel.hotelPrice,
  //       hotelNum: hotel.hotelNum,
  //       fullName,
  //       nights,
  //       age,
  //       gender,
  //       aadhaarNo,
  //       startDate,
  //       endDate,
  //     });
  //     alert(response.data.message);
  //   } catch (error) {
  //     console.error('There was an error!', error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/hotelBooking', {
        userId: profile.userIdOfProfile, // Updated to match backend
        name: profile.name,
        lastName: profile.lastName,
        email: profile.email,
  
        hotelName: hotel.hotelName,
        hotelType: hotel.hotelType,
        city: hotel.city,
        hotelPrice: hotel.hotelPrice, // Correct field name
        hotelNum: hotel.hotelNum,
  
        fullName,
        nights,
        age,
        gender,
        aadhaarNo,
        startDate,
        endDate,
      });
  
      alert(response.data.message); // Notify the user
    } catch (error) {
      console.error('Error during booking submission:', error);
      alert('There was an error submitting your booking.');
    }
  };
  
  if (!hotel) {
    return <div>Loading...</div>; // Loading state for when hotel data is being fetched
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Hotel Info Header */}
      <div className="w-full h-40 bg-blue-600 text-white flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">{hotel.hotelName}</h1>
        <p className="text-sm">{hotel.hotelType} - {hotel.city}</p>
        <p className="text-sm">Price: ${hotel.hotelPrice} / night | Contact: {hotel.hotelNum}</p>
      </div>

      {/* Booking Form */}
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h2 className="text-xl font-semibold text-gray-700">Booking Information</h2>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="input-field"
              required
            />
            <input
              type="number"
              value={nights}
              onChange={(e) => setNights(e.target.value)}
              placeholder="Number of Nights"
              className="input-field"
              required
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="input-field"
              required
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input-field"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              value={aadhaarNo}
              onChange={(e) => setAadhaarNo(e.target.value)}
              placeholder="Aadhaar Number"
              className="input-field"
              required
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPageByHotelOrUserID;
