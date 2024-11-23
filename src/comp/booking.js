import React, { useState, useEffect } from "react";
import Header from './header'; // Assuming you have a header component
import axios from "axios";
import { ReactSession } from 'react-client-session';


const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //const userId = "6740dd9715ff8bc4c9a1ac49"; // Replace this with the actual user ID from session or context

  ReactSession.setStoreType("localStorage");

  const loginDetails = ReactSession.get("LoginDetails");

  const profile = {
    userIdOfProfile:loginDetails.id,
    name: loginDetails.name,
    lastName: loginDetails.lname,
    phone: loginDetails.num,
    email: loginDetails.email,
};

  // Fetch bookings from API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8000/userBookingList", {
          params: { userId : profile.userIdOfProfile },
        });
        setBookings(response.data); // Set the bookings data from the response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      {/* Include Header Component */}
      <Header />

      <div className="container mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4">Booking List</h2>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Booking ID</th>
                <th className="border border-gray-300 p-2 text-left">Full Name</th>
                <th className="border border-gray-300 p-2 text-left">Hotel Name</th>
                <th className="border border-gray-300 p-2 text-left">City</th>
                <th className="border border-gray-300 p-2 text-left">Nights</th>
                <th className="border border-gray-300 p-2 text-left">Start Date</th>
                <th className="border border-gray-300 p-2 text-left">End Date</th>
                <th className="border border-gray-300 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="border border-gray-300 p-2">{booking._id}</td>
                    <td className="border border-gray-300 p-2">{booking.fullName}</td>
                    <td className="border border-gray-300 p-2">{booking.hotelName}</td>
                    <td className="border border-gray-300 p-2">{booking.hotelCity}</td>
                    <td className="border border-gray-300 p-2">{booking.nights}</td>
                    <td className="border border-gray-300 p-2">{new Date(booking.startDate).toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-2">{new Date(booking.endDate).toLocaleDateString()}</td>
                    <td className="border border-gray-300 p-2">
                      <span
                        className={`px-2 py-1 rounded ${
                          booking.Status === "Confirmed"
                            ? "bg-green-100 text-green-600"
                            : booking.Status === "Pending"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {booking.Status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-gray-300 p-2 text-center" colSpan="8">
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Booking;
