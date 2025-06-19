import React from 'react';
import {ImInstagram, ImLinkedin} from 'react-icons/im';

const Socials = () => {
  return (
    <div
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a className='hover:text-yellow-400' href='http://www.instagram.com/__.soroush.__' target='_blank' rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a className='hover:text-yellow-400' href='https://www.linkedin.com/in/soroush-bahrami-ba691b19b/' target='_blank' rel="noreferrer">
            <ImLinkedin />
          </a>
        </li>
       
      </ul>
    </div>
  );
};

export default Socials;
