import React from 'react';
import ReactDOM from 'react-dom';

import Header from './comp/header'; // Assuming the correct path and case
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './comp/about';
import Gallary from './comp/gallary';
import Romes from './comp/romes';
import Page from './comp/page';
import Blog from './comp/blog';
import Contact from './comp/contact';
import CreateAccount from './comp/createAccount';
import Login from './comp/login';
import Heder from './onwer/onwerComp/herder';
import OnwerUpladHotalDetail from './onwer/onwerComp/onwerUploadHotelDeatial';
import HomePage from './comp/home';
import Profile from './comp/profile';
import RoomDetail from './comp/roomDetail';
import BookingPageByHotelOrUserID from './comp/bookingPage/bookingPageByHotelOrUserID';
import Booking from './comp/booking';
import EditStatus from './onwer/onwerComp/editStatus';
const Header1 = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/romes' element={<Romes/>}/>
      <Route path='/gallary' element={<Gallary />} />
      <Route path='/page' element={<Page />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/createAccount' element={<CreateAccount />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/owner' element={<Heder />} />
      <Route path='/addRoom' element={<OnwerUpladHotalDetail />} />
      <Route path='/profile' element={ <Profile />} />
      <Route path='/roomDetail/:id' element={ <RoomDetail />} />
      <Route path='/BookingPageByHotelOrUserID/:id' element={ <BookingPageByHotelOrUserID />} />
      <Route path='/booking' element={ <Booking />} />
      <Route path='/editStatus/:id' element={ <EditStatus />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <Header1 />,
  document.getElementById('root')
);
