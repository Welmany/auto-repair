import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import AutoPaint from './pages/Services/AutoPaint/AutoPaint';
import BumperRepair from './pages/Services/BumperRepair/BumperRepair';
import DentRepair from './pages/Services/DentRepair/DentRepair';

import './App.css';

function app() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/autoPaint' element={<AutoPaint/>}/>
        <Route path='/bumperRepair' element={<BumperRepair/>}/>
        <Route path='/dentRepair' element={<DentRepair/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default app;