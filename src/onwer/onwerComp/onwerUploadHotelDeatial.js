import { useState, useEffect } from 'react';
import axios from 'axios';
import OnwerHomePAge from './Home';
function OnwerUpladHotalDetail() {
  const [coverPic, setCoverPic] = useState(null);
  const [roomPic, setRoomPic] = useState(null);
  const [viewPic, setViewPic] = useState(null);
  const [bathroomPic, setBathroomPic] = useState(null);
  const [coverDesc, setCoverDesc] = useState('');
  const [longDesc, setLongDesc] = useState('');
  const [city, setCity] = useState('');
  const [hotelNum, setHotelNum] = useState('');
const [hotelName,setHotelName]=useState('');
const[hotelPrices,setHotelPrices]=useState('');
  const [hotels, setHotels] = useState([]);
const [hotelType,setHotelType]=useState('');
  useEffect(() => {
    // Fetch hotel data from the backend
    axios.get('http://localhost:8000/hotels')
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append images
    formData.append('coverPic', coverPic);
    formData.append('roomPic', roomPic);
    formData.append('viewPic', viewPic);
    formData.append('bathroomPic', bathroomPic);

    // Append text fields
    formData.append('coverDesc', coverDesc);
    formData.append('longDesc', longDesc);
    formData.append('city', city);
    formData.append('hotelNum', hotelNum);
    formData.append('hotelName',hotelName);
    formData.append('hotelPrices',hotelPrices);
    formData.append('hotelType',hotelType);
    axios.post('http://localhost:8000/upload', formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <OnwerHomePAge />
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div className="text-center mb-16">
        <a href="#"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-52 inline-block' /></a>
        <h4 className="text-gray-800 text-base font-semibold mt-6">Add Room Detail</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Hotel Name</label>
            <input
              name="hotelName"
              type="text"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter hotel name"
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Hotel Prices</label>
            <input
              name="hotelPrices"
              type="text"
              value={hotelPrices}
              onChange={(e) => setHotelPrices(e.target.value)}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter prices"
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Cover Desc</label>
            <input name="coverDesc" type="text" value={coverDesc} onChange={(e) => setCoverDesc(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Long desc</label>
            <input name="longDesc" type="text" value={longDesc} onChange={(e) => setLongDesc(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter description" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">City</label>
            <select name="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all">
              <option value="Lucknow">Lucknow</option>
              <option value="Gorakhpur">Gorakhpur</option>
              <option value="Opel">Opel</option>
              <option value="Audi">Audi</option>
            </select>
          </div>
          <div>
  <label className="text-gray-800 text-sm mb-2 block">Hotel Type</label>
  <select 
    name="hotelType" 
    value={hotelType} 
    onChange={(e) => setHotelType(e.target.value)} 
    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
  >
    <option value="" disabled>Select hotel type</option>
    <option value="luxury">Luxury</option>
    <option value="budget">Budget</option>
    <option value="boutique">Boutique</option>
    <option value="resort">Resort</option>
  </select>
</div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Hotel Num</label>
            <input name="hotelNum" type="number" value={hotelNum} onChange={(e) => setHotelNum(e.target.value)} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Cover Pic</label>
            <input name="coverPic" type="file" onChange={(e) => setCoverPic(e.target.files[0])} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Room Pic</label>
            <input name="roomPic" type="file" onChange={(e) => setRoomPic(e.target.files[0])} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">View Pic</label>
            <input name="viewPic" type="file" onChange={(e) => setViewPic(e.target.files[0])} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Bathroom Pic</label>
            <input name="bathroomPic" type="file" onChange={(e) => setBathroomPic(e.target.files[0])} className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" />
          </div>
        </div>

        <div className="!mt-12">
          <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <h2 className="text-center text-2xl font-semibold mb-8">Hotel Listings</h2>
        {hotels.map((hotel, index) => (
          <div key={index} className="mb-8 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">{hotel.coverDesc}</h3>
            <p className="text-gray-700 mb-2">{hotel.longDesc}</p>
            <p className="text-gray-700 mb-2"><strong>City:</strong> {hotel.city}</p>
            <p className="text-gray-700 mb-2"><strong>Hotel Number:</strong> {hotel.hotelNum}</p>

            {hotel.coverPic && <img src={`http://localhost:8000/${hotel.coverPic}`} alt="Cover" className="mb-4 w-full h-auto rounded-md" />}
            {hotel.roomPic && <img src={`http://localhost:8000/${hotel.roomPic}`} alt="Room" className="mb-4 w-full h-auto rounded-md" />}
            {hotel.viewPic && <img src={`http://localhost:8000/${hotel.viewPic}`} alt="View" className="mb-4 w-full h-auto rounded-md" />}
            {hotel.bathroomPic && <img src={`http://localhost:8000/${hotel.bathroomPic}`} alt="Bathroom" className="mb-4 w-full h-auto rounded-md" />}
          </div>
        ))}
      </div>


    </div>
    </div>
  );
}

export default OnwerUpladHotalDetail;
