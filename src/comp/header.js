import React, { useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";
import HomePage from "./home";

import { useEffect } from "react";

import { ReactSession } from 'react-client-session';

function Header() {

  ReactSession.setStoreType("localStorage");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = ReactSession.get("id");
    console.log(id);
    if (id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const [icons, setIcons] = useState(false);
  const shows = () => {
    setIcons(!icons);
  };
  const show = () => {
    console.log("ibenb");

    return (

      // <div style={{position:'absolute',top:'70%',height:'1000px',width:'1000px',backgroundColor:'gray'}}>hju</div>
      <div
        style={{
          b
        }}
      >
        <h1>Content Visible</h1>
      </div>
    );
  };

  return (

    // <div className=" items-center justify-center ">
    <div className="sticky">
      <div className="h-16 bg-red-500">
        <p className="sticky" style={{ position: 'absolute', top: '20px', left: '3%' }}>

        </p>
        <Link to="/onwer" >Onwer</Link>
      </div>

      <div className="h-16 bg-black">
        <p className="text-white" style={{ position: 'absolute', top: '80px', left: '3%' }}>xyz</p>
      </div>

      <div className="bg-slate-400  sticky">
        <div className="h-16 bg-slate-400 sticky ">
          <nav className="hidden md:flex gap-7 justify-end items-center h-full text-white pr-40">
            <Link to="/" className="hover:underline hover:mix-blend-difference">Home</Link>
            <Link to="/about" className="hover:underline  hover:mix-blend-difference">About</Link>
            <Link to="/romes" className="hover:underline  hover:mix-blend-difference">Romes</Link>
            <Link to="/page" className="hover:underline hover:mix-blend-difference">Page</Link>
            <Link to="/gallary" className="hover:underline hover:mix-blend-difference">Gallery</Link>
            <Link to="/blog" className="hover:underline hover:mix-blend-difference">Blog</Link>
            <Link to="/contact" className="hover:underline hover:mix-blend-difference">Contact</Link>
            {
              isLoggedIn ? (
                <Link to="/profile" className="hover:underline hover:mix-blend-difference">Profile</Link>
              ) : (
                <Link to="/Login" className="hover:underline hover:mix-blend-difference">Login</Link>
              )
            }
            <Link to="/booking" className="hover:underline hover:mix-blend-difference">Booking</Link>

          </nav>
          {/* <nav className="  md:flex relative  justify-end right-16">
          { <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/romes" className="hover:underline">Romes</Link>
          <Link to="/page" className="hover:underline">Page</Link>
          <Link to="/gallary" className="hover:underline">Gallery</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link> */}

          {/* <div className=" md:hidden relative text-white text-xl h-16   "  onClick={()=> show ?  <BsJustifyRight/>: console.log("fb") }></div>  */}
          {/* <a className="md:hidden text-white text-xl" onClick={show ? <BsJustifyRight/>: ()=> console.log("vdd")
                     }><BsJustifyRight/></a> }
            <a onClick={show}>
            <BsJustifyRight/>
                        </a>
                      
          
        </nav> */}
        </div>
      </div>

      {/* Home page design code */}
      {/* This section is only visible on desktop-sized screens and above */}




    </div>










  );
}

export default Header;
