import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Works from '../pages/Works';
import Hero from '../pages/Hero';
import TourDates from './TourDates';

// import routes route & useLocation hook
import { Routes, Route, useLocation, Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Works />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/tourDates' element={<TourDates />} />

      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
