import React, { useState } from 'react';
import soroush from '../img/about/about.jpg';
import elliot from '../img/about/elliot.jpg';
import nello from '../img/about/nello.jpg';
import guitarist from '../img/about/guitarist.jpg';
import bassist from '../img/about/bassist.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';

const About = () => {
  const [active, setActive] = useState(null);

  const members = [
    {
      name: 'Nello Virdo',
      image: nello,
      bio: `Nello Virdo is a powerful vocalist blending the spirit of rock and blues, inspired by legends like Led Zeppelin and Janis Joplin. Trained at Sheridan and Humber College, he developed a unique style rooted in emotional depth and vocal precision. From jazz to progressive rock, Nello's journey through genres and stages—from intimate clubs to large festivals—has shaped his commanding stage presence. As the lead singer of Zepology, he channels the essence of Robert Plant with authenticity and raw energy, delivering every note with passion.`,
    },
    {
      name: 'Garry McDougall',
      image: guitarist,
      bio: `Garry McDougall has been in the Toronto Classic Rock Scene since the mid 80s. Heavily influenced by the guitar greats of that era including the legendary Jimmy Page, he played the live circuit through the 90s with local favorites Steelback, Blackpool and The Machine. In 2000, he joined the top rated tribute act “Greatest Hits Live” covering Queen, Styx, Foreigner, Supertramp and Pink Floyd. Now with Zepology, Garry has come full circle back to his true passion - playing Led Zeppelin - with the power and presence of Page himself.`,
    },
    {
      name: 'Elliot Pantich',
      image: elliot,
      bio: `Growing up playing in music venues as early as 12 years old, Elliot found his rhythm early and never looked back. A groove-driven drummer with roots in blues and classic rock, Elliot draws his inspiration from legends like John Bonham, Mitch Mitchell and Keith Moon. When he’s not laying down thunderous beats for Zepology, Elliot also plays with local blues band “South Side Bandits” and jazz trio “Shady Groove”.`,
    },
    {
      name: 'Tim Haynes',
      image: bassist,
      bio: `Tim Haynes always had a passion for music that’s deep in his veins. Starting on piano at 8, and playing guitar and drums by 13, he found his true calling with the bass guitar. Influenced by John Paul Jones, James Jamerson, and Geddy Lee, Tim became a groove machine. Over the years, he’s played in several cover bands and original projects, before locking into Zepology where his energy and precision ground the band’s sound. Off stage, Tim’s a sound engineer and vintage gear enthusiast, always chasing the perfect tone.`,
    },
  ];

  return (
    <>
      {/* Desktop Section */}
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='hidden bg-black lg:flex lg:pb-20'
      >
        <div className='container mx-auto h-full relative'>
          {/* Header and Description */}
          <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-0'>
            <motion.div
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-80%' }}
              transition={transition1}
              className='flex-1 w-2/3 lg:mt-28 mt-56 lg:pt-0 pt-36 pb-14  lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
            >
              <div className='flex lg:mt-0 mt-10'>
                <h1 className='h1 text-white'>
                  About <span className='text-red-600'>Zepology</span>
                </h1>
              </div>
              <p className='w-4/5 lg:mt-6 text-gray-400'>
                Zepology is a high-energy tribute band that brings the legendary sound of Led Zeppelin back to life. With a passion for recreating the magic of Zeppelin’s music, the band captures everything from the iconic guitar solos to the soaring vocals and powerful rhythms...
              </p>
            </motion.div>
          </div>

          {/* Band Members Grid */}
          <div className='flex flex-col items-center justify-center lg:mt-0 mt-20'>
            <div className='flex flex-wrap justify-center gap-10 px-4'>
              {members.map((member, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className='cursor-pointer max-w-[240px] w-full bg-black p-2 rounded-lg hover:scale-105 transition duration-300'
                >
                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-[350px] object-cover opacity-90 rounded-lg'
                    />
                  </div>
                  <div className='text-white text-center mt-2 font-semibold text-lg'>
                    {member.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio section below */}
            {active !== null && (
              <div className='mt-16 max-w-4xl mx-auto text-center px-6'>
                <h2 className='text-2xl text-white font-bold mb-4'>
                  {members[active].name}
                </h2>
                <p className='text-gray-300 text-lg leading-relaxed'>
                  {members[active].bio}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Mobile section (unchanged) */}
      <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='lg:hidden'
      >
        <div className='container pt-40 mx-auto h-full relative'>
          <div className='flex flex-col h-full items-center justify-center text-center pt-10 pb-14'>
            <h1 className='h1 mb-4'>About <span className='text-red-600'>Zepology</span></h1>
            <p className='w-4/5 mb-10'>
              Zepology is a high-energy tribute band that brings the legendary sound of Led Zeppelin back to life...
            </p>
            <Link to={'/tourDates'} className='btn mb-10'>
              Tour Dates
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
