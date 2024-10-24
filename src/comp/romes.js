import React, { useEffect } from "react";
import Header from './header';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import axios from "axios";
import { id } from "date-fns/locale";
import { Link  , useNavigate} from "react-router-dom";
import {ReactSession} from 'react-client-session';
// import { HiOutlineMenu } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";

function Romes() {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();
  ReactSession.setStoreType("localStorage");
  const userId = ReactSession.get("id");
 useEffect(()=>{ 
  axios.get('http://localhost:8000/hotels')
  .then((res) => {
    setHotels(res.data)
  })
  .catch((err) => {
    console.error(err);
  });},[])

  function BookingHotelByUserCheckIng(){
    if(!userId){
        navigate('/Login');
    }else{
        navigate('/');
    }
}

  return (
    <div>
    <Header />
    <div className="grid grid-cols-3 gap-4 p-4">
      {hotels.map((hotel, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={hotel.coverPic ? `http://localhost:8000/${hotel.coverPic}` : 'default-image.jpg'}
            alt={`Hotel ${idx}`}
          
                      />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{hotel.hotelName}</h2>
            <p className="text-gray-700 mb-4">{hotel.coverDesc}</p>
            <div className="flex space-x-4">
             
            <Link to={`/roomDetail/${hotel._id}`}><button
               className=" text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               >Show Detail</button>
               </Link>

               <button
               onClick={BookingHotelByUserCheckIng} 
               className=" text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               >Book No</button>
               
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Romes;

{/*

    // const [openDatePicker, setopenDatePicker] = useState(false);
    // const [date, setDate] = useState({
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection',
    // });


              <div className="hidden sm:block">
                <div className="flex gap-9 grid-flow-row justify-center" >
                    <label>Check-in Date:</label>
                    <label>Checkout Date:</label>
                    <label>Adults:</label>
                    <label>Children:</label>
                </div>
                <div className="flex flex-wrap relative justify-center gap-4">
  <div className="relative">
    <input 
      type="date" 
      required 
      className="p-2 border rounded"
    />
  </div>
  
  <div className="relative">
    <input 
      type="date" 
      required 
      className="p-2 border rounded"
    />
  </div>

  <div className="relative">
    <input 
      type="number" 
      min="0" 
      className="p-2 border rounded"
    />
  </div>

  <div className="relative">
    <input 
      type="number" 
      min="0" 
      className="p-2 border rounded"
    />
  </div>
</div>

            </div>

            <h1 className="block sm:hidden">rrr</h1>

  
  
  
  
  
  
  
  
  
  <div className="flex justify-center bg-neutral-500 h-12  shadow-lg">
                <form className="flex">
                    <div className=" gap-10 flex">

                        <input type="Date" className=" top-10  relative" />
                        <input type="Date" className=" top-10  relative" />
                        <input type="text" className=" top-10  relative" />

                    </div>

                </form>
            </div> */}