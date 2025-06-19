 import React, { useState, useEffect } from 'react';
import { client } from '../components/client';
import portrait from '../img/portfolio/portrait.jpg';
import blackwhite from '../img/portfolio/bird.jpg';
import city from '../img/portfolio/ribs.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TourDates from '../components/TourDates'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import { transition1 } from '../transitions';
import Hero from '../components/Hero'
import header from '../img/header/header.jpg'
import Video from '../components/Video';

const Portfolio = () => {

  const [portraits, setPortraits] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "portraits"]';

    client.fetch(query).then((data) => {
      setPortraits(data);
    });

    console.log(portraits)
  }, []);

 

  return (

    
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section overflow-auto'
    >
      <Hero/>
      <Video/>
      <About/>
      {//<Works/>}
      }
       <Contact/> 

    </motion.section>
  );
};

export default Portfolio;
