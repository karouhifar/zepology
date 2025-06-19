import React from 'react';
// import images
import soroush from '../img/about/soroush1.jpg';
import hSoroush from '../img/header/hSoroushNew.jpg'
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
import {ImInstagram, ImLinkedin} from 'react-icons/im';

const Hero = () => {
  return (

    <>

    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section hidden lg:block xl:block md:block sm:block'
    >

<div className='relative flex top-40 items-center'>
  <img src={hSoroush} alt='' height={1000} className='relative z-10 ' />
  <div className='absolute  items-center bg-red text-left p-4' style={{ left: '5%', zIndex: '20' }}>
    <h1 className='h1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white mx-auto'>Soroush's</h1>
  </div>
  <div className='absolute items-center bg-blue text-right p-4' style={{ right: '7%', zIndex: '20' }}>
    <h1 className='h1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white  mx-auto'>Portfolio</h1>
  </div>
</div>

    </motion.section>

    

    </>
    
  );
};

export default Hero;
