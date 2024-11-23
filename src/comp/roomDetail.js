import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function RoomDetail() {
    const { id } = useParams(); // Extract the ID from the URL
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the hotel data from the server
                const response = await axios.get(`http://localhost:8000/hotelBooking/${id}`);

                // Set the fetched data to the hotelData state
                setHotelData(response.data);
            } catch (err) {
                setError("Error fetching hotel details. Please try again.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchHotelData();
    }, [id]);

    // Booking button handler
    const handleBooking = () => {
        // For now, navigate to a booking page or log to the console
        console.log("Booking for hotel:", hotelData.hotelName);
        navigate(`/BookingPageByHotelOrUserID/${id}`); // Uncomment if you have a booking route set up
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!hotelData) return <p>No data available for this hotel.</p>;

    return (
        <div className="p-8 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src={`http://localhost:8000/${hotelData.coverPic}`}
                    alt={`${hotelData.hotelName} Cover`}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2">{hotelData.hotelName}</h1>
                    <p className="text-gray-600 text-sm">{hotelData.hotelType} - {hotelData.city}, {hotelData.hotelCity}</p>
                    
                    <p className="text-lg font-semibold text-gray-800 my-4">${hotelData.hotelPrice} / night</p>
                    <p className="text-gray-700 mb-4">{hotelData.coverDesc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <img
                            src={`http://localhost:8000/${hotelData.roomPic}`}
                            alt="Room"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <img
                            src={`http://localhost:8000/${hotelData.viewPic}`}
                            alt="View"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <img
                            src={`http://localhost:8000/${hotelData.bathroomPic}`}
                            alt="Bathroom"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mb-2">Hotel Overview</h2>
                    <p className="text-gray-700">{hotelData.longDesc}</p>
                    
                    <div className="mt-6 border-t pt-4 text-gray-800">
                        <p><strong>Contact Number:</strong> {hotelData.hotelNum}</p>
                    </div>

                    {/* Book Now Button */}
                    <button onClick={handleBooking}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoomDetail;
