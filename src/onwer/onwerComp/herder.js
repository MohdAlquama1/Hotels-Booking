import '../../index.css';
import OnwerHomePAge from './Home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'; // Import date-fns format function

export default function Heder() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/seeOnwerToStatus')
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <OnwerHomePAge />

      <div className="overflow-x-auto px-4 py-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="text-left bg-gray-700 text-white">
              <th className="p-4">S.NO</th>
              <th className="p-4">Login First Name</th>
              <th className="p-4">Login Email</th>
              <th className="p-4">Hotel Name</th>
              <th className="p-4">Hotel Type</th>
              <th className="p-4">Hotel City</th>
              <th className="p-4">Hotel Num</th>
              <th className="p-4">Name Booker</th>
              <th className="p-4">Nights</th>
              <th className="p-4">Age</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Aadhaar No</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, idx) => (
              <tr key={hotel._id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">{idx + 1}</td>
                <td className="p-4">{hotel.LoginFirstName} {hotel.loginLastName}</td>
                <td className="p-4">{hotel.LoginEmail}</td>
                <td className="p-4">{hotel.hotelName}</td>
                <td className="p-4">{hotel.hotelType}</td>
                <td className="p-4">{hotel.hotelCity}</td>
                <td className="p-4">{hotel.hotelNum}</td>
                <td className="p-4">{hotel.fullName}</td>
                <td className="p-4">{hotel.nights}</td>
                <td className="p-4">{hotel.age}</td>
                <td className="p-4">{hotel.gender}</td>
                <td className="p-4">{hotel.aadhaarNo}</td>
                <td className="p-4">
                  {hotel.startDate ? format(new Date(hotel.startDate), 'dd MMM yyyy') : '-'}
                </td>
                <td className="p-4">
                  {hotel.endDate ? format(new Date(hotel.endDate), 'dd MMM yyyy') : '-'}
                </td>
                <td className="p-4">{hotel.Status}</td>
                <td className="p-4">
                  <Link to={`/editStatus/${hotel._id}`}>
                    <button
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Edit Status
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
