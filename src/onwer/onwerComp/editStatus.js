import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStatus() {
  const { id } = useParams();  // Get the ID from the URL
  const [status, setStatus] = useState('');  // Local state to store the status
  const [hotel, setHotel] = useState(null);  // Store hotel details
  const navigate = useNavigate();

  // Fetch hotel details when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:8000/getHotelById/${id}`)
      .then((res) => {
        setHotel(res.data);
        setStatus(res.data.Status);  // Pre-fill the status
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/editSatutus`, { id, status })
      .then((res) => {
        console.log(res.data);
        navigate('/');  // Navigate back to the homepage or relevant page
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="relative md:top-[400px] sm:top-1">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <label htmlFor="status" className="sr-only">Status</label>
        
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}  // Update status state
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="">Choose a Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <div className="bottom-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Status
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStatus;
