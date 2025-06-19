import React, {useContext} from 'react'
import portrait from '../img/portfolio/portrait.jpg';
import blackwhite from '../img/portfolio/blackwhite.jpg';
import city from '../img/portfolio/ribs.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Works = () => {

    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
    <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='grid grid-cols-2 lg:gap-4'
          >
            <div>

            <div className='flex max-w-[250px] mb-5 lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden cursor-pointer'>
            <img
              className=' h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={blackwhite}
              alt=''
            />
            <h1 className='h1 text-5xl p-2 mt-4 hover:scale-110 transition-all duration-500'>Black <br/> & <br/> White</h1>
            </div>  

            <div className='flex max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] overflow-hidden cursor-pointer'>
          <h1 className='h1 text-4xl p-3 mt-14 hover:scale-110 transition-all duration-500'>Portraits</h1>
            <img
              className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
              src={portrait}
              alt=''
            />
          </div> 


           </div>
            
           

          <div className='max-w-[250px] lg:max-w-[320px] h-full lg:h-full overflow-hidden cursor-pointer'>
          <h1 className='h1 text-5xl p-2 mt-4 hover:scale-110 transition-all duration-500'>City</h1>
            <img
              className='object-cover h-full lg:h-full hover:scale-110 transition-all duration-500'
              src={city}
              alt=''
            />
          </div> 

          </div>
    </>
  )
}

export default Works