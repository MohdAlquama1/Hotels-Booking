import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';

function Header() {
  ReactSession.setStoreType("localStorage");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = ReactSession.get("LoginDetails");
    setIsLoggedIn(!!id); // Set true if id exists, false otherwise
  }, []);

  return (
    <header className="sticky top-0 z-10">
      {/* Top Bar */}
      <div className="bg-red-500 h-16 flex items-center justify-between px-4">
        <Link to="/owner" className="text-white font-bold">Owner</Link>
        <div className="text-white">xyz</div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-slate-400 h-16 flex items-center justify-between px-4">
        <div className="flex gap-7 text-white">
        <Link to="/" className="hover:underline hover:mix-blend-difference">Home</Link>
            <Link to="/about" className="hover:underline  hover:mix-blend-difference">About</Link>
            <Link to="/romes" className="hover:underline  hover:mix-blend-difference">Romes</Link>
            <Link to="/page" className="hover:underline hover:mix-blend-difference">Page</Link>
            <Link to="/gallary" className="hover:underline hover:mix-blend-difference">Gallery</Link>
            <Link to="/blog" className="hover:underline hover:mix-blend-difference">Blog</Link>
            <Link to="/contact" className="hover:underline hover:mix-blend-difference">Contact</Link>
            {
              isLoggedIn ? ([
                <Link to="/profile" className="hover:underline hover:mix-blend-difference">Profile</Link> 
                ,
                <Link to="/booking" className="hover:underline hover:mix-blend-difference">Booking</Link>
              ]
              ) : (
                <Link to="/Login" className="hover:underline hover:mix-blend-difference">Login</Link>
              )}
        </div>
      </nav>
    </header>
  );
}

export default Header;



