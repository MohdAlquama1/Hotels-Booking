// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const BookingPageByHotelOrUserID = () => {
  // const { id } = useParams();
  // const [hotels, setHotels] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     axios.get(`http://localhost:8000/hotelBooking/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //         setHotels(res.data); // Assuming response is an array
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setError('Failed to load data');
  //         setLoading(false);
  //       });
  //   }
  // }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   const hotel = hotels.hotelName;
//   const idHotel = hotels._id;
//   console.log(hotel,idHotel);
  
//   return (
//     <div>
//  </div>
//   );
// };

// export default BookingPageByHotelOrUserID;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {ReactSession} from 'react-client-session'
const BookingPageByHotelOrUserID = () => {

  const [fullName,setFullName]=useState('');
  const [nights,setNights]=useState('');
  const [age,setAge]=useState('');
  const [gender,setGender]=useState('');
  const[aadhaarNo,setAadhaarNo]=useState('');
  const[startDate,setStartDate]=useState('');
  const[endDate,setEndDate]=useState('');
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);

  ReactSession.setStoreType("localStorage");
  const USerId = ReactSession.get("id");
  const name = ReactSession.get("name");
  const lname = ReactSession.get("lname");
  const email = ReactSession.get("email");

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/hotelBooking/${id}`)
        .then((res) => {
          console.log(res.data);
          setHotels(res.data); // Assuming response is an array
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  

  const ResHotelName=hotels.hotelName ;
  const ResHotelType = hotels.hotelType ;
  const ResCity=hotels.city ;
  const ResHotelPrice=hotels.hotelPrice;
  const ResHotelNum=hotels.hotelNum ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/hotelBooking',{
      USerId,
      name,
      lname,
      email,
      ResHotelName,
      ResHotelType,
      ResCity,
      ResHotelPrice,
      ResHotelNum,
      fullName,
      nights,
      age,
      gender,
      aadhaarNo,
      startDate,
      endDate
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }  }
  return (
 <div >
  <div className='w-full h-36 bg-gray-600 text-white  flex  gap-12 grid-flow-col justify-center items-center '>
  <h5>Hotel Name : {ResHotelName}</h5>
  <h5>Hotel Type : {ResHotelType}</h5>
  <h5>Hotel City :{ResCity}</h5>
  <h5>Hotel Price : {ResHotelPrice}</h5>
  <h5>hotel NO : {ResHotelNum} </h5>
  </div>
     <form  onSubmit={handleSubmit}  className="flex-1 top-5 relative">
      <div>
        <label className="text-gray-800 text-sm mb-2 block">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e)=>setFullName(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          placeholder="Enter your full name"
          
        />
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">Number of Nights</label>
        <input
          type="number"
          name="nights"
          value={nights}
          onChange={(e)=>setNights(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          placeholder="Enter number of nights"
          
        />
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">Age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          placeholder="Enter your age"
          
        />
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">Gender</label>
        <select
          name="gender"
          value={gender}
          onChange={(e)=>{setGender(e.target.value)}}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          
        >
          <option value="" disabled>Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">Aadhaar Number</label>
        <input
          type="text"
          name="aadhaarNo"
          value={aadhaarNo}
          onChange={(e)=>setAadhaarNo(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          placeholder="Enter Aadhaar number"
          
        />
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={(e)=>setStartDate(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          
        />
      </div>

      <div>
        <label className="text-gray-800 text-sm mb-2 block">End Date</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={(e)=>setEndDate(e.target.value)}
          className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md"
          
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
    </form>
 </div>
  );
};

export default BookingPageByHotelOrUserID;
