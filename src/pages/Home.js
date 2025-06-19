import React, { useState, useEffect, useContext } from 'react';
import Soroush from '../img/home/soroush.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import TourDates from '../components/TourDates'
import { urlFor, client } from '../components/client';
import Works from '../components/Works';


const Home = () => {

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <TourDates/>
    </motion.section>
  );
};

export default Home;
