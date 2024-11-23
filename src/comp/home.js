import React from "react";
import Header from './header'; 
import homeImage from '../image/desktopImage/home.jpg'; // Adjust the path as necessary
import { ReactSession } from 'react-client-session';
function HomePage() {
    ReactSession.setStoreType("localStorage"); // Configure storage

    return ( 
    <div>
         <Header/>
         <div className="home-container">
      <header className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Our Hotel</h1>
        <p className="text-lg mt-4">
          Experience luxury and comfort like never before!
        </p>
        <img 
        src={homeImage} 
        alt="Hotel Home" 
        className="w-1/2 h-auto rounded-lg shadow-lg mx-auto"      />
      </header>

      <section className="mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-lg">
          Our hotel offers a unique blend of luxury, comfort, and convenience. Here’s what makes us special:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Stunning views of the city skyline.</li>
          <li>24/7 customer service to cater to your needs.</li>
          <li>Exclusive discounts for early bookings.</li>
          <li>High-speed Wi-Fi and modern business facilities.</li>
        </ul>
      </section>

      <section className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/100" alt="Swimming Pool" className="mr-4" />
            <div>
              <h3 className="font-semibold">Swimming Pool</h3>
              <p>Relax and unwind in our outdoor swimming pool.</p>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/100" alt="Spa" className="mr-4" />
            <div>
              <h3 className="font-semibold">Spa & Wellness</h3>
              <p>Indulge in rejuvenating spa treatments and wellness programs.</p>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/100" alt="Restaurant" className="mr-4" />
            <div>
              <h3 className="font-semibold">Fine Dining</h3>
              <p>Enjoy gourmet meals prepared by our top chefs.</p>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/100" alt="Gym" className="mr-4" />
            <div>
              <h3 className="font-semibold">Fitness Center</h3>
              <p>Stay fit with our state-of-the-art gym facilities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="font-semibold">"An unforgettable experience! The service was top-notch, and the amenities were fantastic."</p>
          <p className="text-right mt-2">- Jane Doe</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <p className="font-semibold">"The best hotel I’ve ever stayed in. I will definitely be coming back!"</p>
          <p className="text-right mt-2">- John Smith</p>
        </div>
      </section>

      <section className="mt-10 p-4 bg-gray-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <p>
          To book your stay, <a href="/login" className="text-blue-600 hover:underline">log in</a> to your account or <a href="/signup" className="text-blue-600 hover:underline">create a new account</a>.
        </p>
      </section>
    </div>
    </div>
    );
}

export default HomePage;