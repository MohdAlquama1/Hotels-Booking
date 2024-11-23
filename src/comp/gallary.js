import React from "react";
import Header from './header'; 
import{ ReactSession} from 'react-client-session';
import roomView from '../image/desktopImage/Romeview.jpg';
import pool from '../image/desktopImage/poolarea.jpg';
import DiningArea from '../image/desktopImage/DiningArea.jpg';
import lobby from '../image/desktopImage/lobby.jpg';
import spa from '../image/desktopImage/spa.jpg';

import Suite from '../image/desktopImage/Suite.jpg';

function Gallary() {
    // ReactSession.setStoreType("localStorage"); // Set session storage type to localStorage
    // const clearSessionData = () => {
    //     ReactSession.remove("id");
    //     console.log("All session data cleared.");
    //   };
    return ( 
    <div>
         <Header/>
         <div className="gallery-container p-6">
      <header className="text-center mt-6">
        <h1 className="text-4xl font-bold">Our Gallery</h1>
        <p className="text-lg mt-4 text-gray-700">
          Take a look at our beautiful spaces and amenities.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src= {roomView} alt="Room view" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <img src= {pool} alt="Pool area" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <img src={DiningArea} alt="Dining area" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <img src={lobby} alt="Lobby" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <img src = {spa} alt="Spa" className="rounded-lg shadow-lg w-full h-auto object-cover" />
        <img src= {Suite} alt="Suite" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      </div>

      <section className="mt-10 text-center">
        <p className="text-lg">
          Each corner of our hotel is crafted with care to provide an unforgettable experience.
          Whether you're here for a relaxing stay or a business trip, we have something for everyone.
        </p>
      </section>
    </div>    </div>
    );
}

export default Gallary;