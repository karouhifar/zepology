import React, {useState} from 'react';
import mobile from '../img/header/zep.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
//laptop images
import group from '../img/header/group.jpg'
import zepology from '../img/header/hero.jpg'
import { useNavigate } from 'react-router-dom';
//mobile images


import {MdOutlineArrowForwardIos} from 'react-icons/md'
import {MdOutlineArrowBackIos} from 'react-icons/md'


const images = [zepology, group]

const Hero = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate()

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (

    <>
      <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className=' lg:flex lg:pt-24 xl:block hidden'
      style={{ position: 'relative' }}
    >

<div className='relative flex lg: justify-end  items-center'>
  <img src={images[currentImage]} alt='' height={3000} className='relative w-screen z-0 ' />
  
  {/* <p onClick={() => navigate("/tourDates")} className='absolute hidden lg:flex font-secondary hover:cursor-pointer hover:scale-110  text-xl bottom-10 left-10 m-4 bg-red-600 text-white font-bold  bg-opacity-90 hover:bg-opacity-95 px-3 py-3 rounded-lg'>
  See Tour Dates
</p>   */}
 {/* <div className='absolute  items-center bg-red text-left p-4' style={{ left: '5%', zIndex: '20' }}>
    <h1 className='h1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white mx-auto'>Soroush's</h1>
  </div>
  <div className='absolute items-center bg-blue text-right p-4' style={{ right: '7%', zIndex: '20' }}>
    <h1 className='h1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white  mx-auto'>Portfolio</h1>
  </div> */}
  {/* <div className='absolute ml-4 text-white font-extrabold hover:text-red-600' style={{ zIndex: '30' }}>
  <button onClick={prevImage}><MdOutlineArrowBackIos size={65}/></button>
  </div>
  <div className='absolute right-0 mr-4 text-white font-extrabold hover:text-red-600' style={{ zIndex: '30' }}>
  <button onClick={nextImage}><MdOutlineArrowForwardIos size={65}/></button>
  </div>
   */}

</div>


    </motion.section>

    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className=' lg:hidden xl:hidden md:hidden sm:hidden'
    >

<div className='relative flex items-center justify-center'>
  {/*<div className='absolute ml-4 text-white font-extrabold hover:text-yellow-400' style={{ zIndex: '30', left: 0 }}>
    <button onClick={prevImage}><MdOutlineArrowBackIos size={65}/></button>
    </div> */}
  <img src={mobile} alt='' height={800} className='mt-24 z-10 ' />
  {/*<div className='absolute right-0 mr-4 text-white font-extrabold hover:text-yellow-400' style={{ zIndex: '30' }}>
    <button onClick={nextImage}><MdOutlineArrowForwardIos size={65}/></button>
  </div>*/}
  
</div>

    </motion.section>
    </>
    
  );
};

export default Hero;