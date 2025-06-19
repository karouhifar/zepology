import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import { PiYoutubeLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../img/navbar/led1.png'
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Header = () => {

  const [activePage, setActivePage] = useState("Home")
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const navigate = useNavigate()

  console.log(user)

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [])

  return (
    <header className='bg-black  fixed w-full px-[30px] lg:px-[60px] z-30 h-[100px] lg:h-[100px] flex items-center backdrop-blur-xl animate-fade-in'>
      <div className='flex h-[120px]'>
      <div className='flex p-2'>
          {/* <MdCameraRoll className='mt-2 mr-2 text-4xl bg-yellow-400 p-2 rounded-full'/> */}
          <img onClick={() => navigate("/")} src={logo} className="h-[50px] mt-7 hidden lg:flex p-2  w-auto hover:cursor-pointer" height={50} alt='logo'/>
          <img onClick={() => navigate("/")} src={logo} className="h-[50px] w-[187px] mt-10 flex lg:hidden pb-4 hover:cursor-pointer" height={50} alt='logo'/>

      </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        
          <nav className='hidden xl:flex gap-x-12 font-semibold flex-grow justify-center'>

  {/* HOME */}
  <div className="p-3 relative">
    <Link
      to="/"
      onClick={() => setActivePage("Home")}
      className={`relative text-md rounded-lg p-3 hover:scale-110 hover:text-white transition text-gray-300
      `}
    >
      Home
    </Link>
    <div className={`${activePage === "Home" ? "visible" : "invisible"} absolute -top-1 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm leading-none`}>
      ●
    </div>
  </div>

  {/* TOUR DATES */}
  <div className="p-3 relative">
    <Link
      to="/tourDates"
      onClick={() => setActivePage("TourDates")}
      className={`relative text-md rounded-lg p-3 hover:scale-110 hover:text-white transition text-gray-300
      `}
    >
      Tour Dates
    </Link>
    <div className={`${activePage === "TourDates" ? "visible" : "invisible"} absolute -top-1 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm leading-none`}>
      ●
    </div>
  </div>

  {/* MEDIA */}
  <div className="p-3 relative">
    <Link
      to="/gallery"
      onClick={() => setActivePage("Gallery")}
      className={`relative text-md rounded-lg p-3 hover:scale-110 hover:text-white transition text-gray-300
      `}
    >
      Media
    </Link>
    <div className={`${activePage === "Gallery" ? "visible" : "invisible"} absolute -top-1 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm leading-none`}>
      ●
    </div>
  </div>

  {/* BAND */}
  <div className="p-3 relative">
    <Link
      to="/about"
      onClick={() => setActivePage("About")}
      className={`relative text-md rounded-lg p-3 hover:scale-110 hover:text-white transition text-gray-300
      `}
    >
      Band
    </Link>
    <div className={`${activePage === "About" ? "visible" : "invisible"} absolute -top-1 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm leading-none`}>
      ●
    </div>
  </div>

  {/* CONTACT */}
  <div className="p-3 relative">
    <Link
      to="/contact"
      onClick={() => setActivePage("Contact")}
      className={`relative text-md rounded-lg p-3 hover:scale-110 hover:text-white transition text-gray-300`}
    >
      Contact
    </Link>
    <div className={`${activePage === "Contact" ? "visible" : "invisible"} absolute -top-1 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm leading-none`}>
      ●
    </div>
  </div>

</nav>

        <div className='text-white lg:flex hidden'>
          <a href='https://www.youtube.com/results?search_query=zepology' target='_blank'>
          <PiYoutubeLogo className='hover:cursor-pointer hover:scale-110' size={35}/>
          </a>
        </div>
        
      </div>
      {/* socials */}
      {/* <Socials /> */}

      {/* mobile nav */}
      <div className='text-white lg:hidden flex'>
          <a href='https://www.youtube.com/results?search_query=zepology' target='_blank'>
          <PiYoutubeLogo className='hover:cursor-pointer hover:scale-110 mr-2' size={30}/>
          </a>
        </div>
      <MobileNav />
    </header>
  );
};

export default Header;
