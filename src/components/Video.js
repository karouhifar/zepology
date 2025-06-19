import React from 'react';
import ReactPlayer from 'react-player';
import Hero from './Hero';

const Video = () => {
  return (
    <>
    <div className="flex  flex-col lg:flex-row  lg:p-10 p-8">
      
      {/* Text section */}
      <div className="flex-1 flex lg:pl-10 items-center text-black justify-center text-center">
        <div className="lg:flex-2 text-center items-center justify-center md:p-0">
              <div className="px-10 lg:w-4/4 lg:text-justify text-center">
                <span className="font-extrabold">
                  <span className="float-left mr-2 text-8xl font-bold">Z</span>
                  epology
                </span>{" "}
                  is a high-energy tribute band that brings the legendary sound of Led Zeppelin back to life. With a passion for recreating the magic of Zeppelin’s music, the band captures everything from the iconic guitar solos to the soaring vocals and powerful rhythms. Whether you’re a longtime fan or new to their music, Zepology delivers an unforgettable live experience, transporting audiences to the golden age of rock.

              </div>
            </div>
      </div>
      {/* Video section - appears first on mobile */}
      <div className="flex-1 flex items-center justify-center lg:p-10">
        <div className="w-full max-w-2xl h-full px-6">
  <div className="w-full relative pb-[56.25%] rounded-xl overflow-hidden"> {/* 16:9 aspect ratio + rounded corners */}
    <ReactPlayer 
      url="https://www.youtube.com/watch?v=shypCvT3axY"
      width="100%"
      height="100%"
      className="absolute top-0 left-0"
      style={{ position: 'absolute' }}
      controls={true}
    />
  </div>
</div>
      </div>

      

    </div>
    </>
    
  );
};

export default Video;