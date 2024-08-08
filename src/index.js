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

const Header1 = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/about' element={<About />} />
      <Route path='/romes' element={<Romes/>}/>
      <Route path='/gallary' element={<Gallary />} />
      <Route path='/page' element={<Page />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <Header1 />,
  document.getElementById('root')
);
