import '../../index.css';
import OnwerHomePAge from './Home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Heder() {
  const [hotels, setHotels] = useState([]);
  let id = 1;
  useEffect(() => {
    axios.get('http://localhost:8000/seeOnwerToStatus')
      .then((res) => {
        setHotels(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <OnwerHomePAge />

      <div className="overflow-x-auto">
        <table className="table-auto ">
          <thead>
            <tr className="text-left bg-base-300">
              <th className="p-4">S.NO</th>
              <th className="p-4">Login First Name</th>
              <th className="p-4">Login Email</th>
              <th className="p-4">Hotel Name</th>
              <th className="p-4">Hotel Type</th>
              <th className="p-4">Hotel City</th>
              <th className="p-4">Hotel Num</th>
              <th className="p-4"> Name Booker</th>
              <th className="p-4">Nights</th>
              <th className="p-4">Age</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Aadhaar No</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, idx) => (
              <tr key={idx} className="text-left bg-base-300">
                <th className="p-4">{idx + 1}</th>
                <td className="p-4">{hotel.LoginFirstName + " " + hotel.loginLastName}</td>
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
                <td className="p-4">{hotel.startDate}</td>
                <td className="p-4">{hotel.endDate}</td>
                <td className="p-4">{hotel.Status}</td>
                <td className="p-4">
                  <Link to={`/editStatus/${hotel._id}`}>
                    <button
                      className=" text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

                    >Edit Status</button>
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
