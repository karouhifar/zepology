import React, { useState } from "react";
// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-white xl:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-red-800 shadow-2xl w-full absolute top-0 right-0 max-w-[200px] h-screen"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-2xl absolute z-30 left-4 top-14 text-white cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-top mt-36 items-end mr-10 gap-y-2 text-gray-300 font-secondary font-bold text-md">
          <li className="hover:text-white hover:scale-110">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white hover:scale-110">
            <Link to="/tourDates">Tour Dates</Link>
          </li>
          <li className="hover:text-white hover:scale-110">
            <Link to="/about">Band</Link>
          </li>
          <li className="hover:text-white hover:scale-110">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-white hover:scale-110">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className='flex space-x-4'>
          <a className='hover:text-yellow-500' href='http://www.instagram.com/__.soroush.__' target='_blank' rel="noreferrer">
            <ImInstagram />
          </a>
          <a className='hover:text-yellow-500' href='https://www.linkedin.com/in/soroush-bahrami-ba691b19b/' target='_blank' rel="noreferrer">
            <ImLinkedin />
          </a>
          </li> */}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
