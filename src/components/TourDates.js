import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { motion } from 'framer-motion';
import { client } from '../components/client';
import { transition1 } from '../transitions';

const TourDates = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchShows = async () => {
      try {
        const query = '*[_type == "shows"]';
        const data = await client.fetch(query);
        setShows(data);
      } catch (error) {
        console.error("Error fetching tour dates:", error);
      }
    };
    fetchShows();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={transition1}
      className="section pb-20 text-gray-200 bg-white h-full overflow-auto"
    >
      {/* Title */}
      <div className="flex justify-center items-center mt-36 lg:mt-40 mb-8">
        <h1 className="h1 text-black text-3xl font-bold">Tour Dates</h1>
      </div>

      {/* Tour Dates Container */}
      <div className="flex flex-col items-center w-full p-6">
        <div className="w-full max-w-3xl space-y-4">
          {shows.length > 0 ? (
            shows.map((show, index) => {
              const formattedDate = show?.date
                ? format(new Date(show.date), "MMM d, yyyy")
                : "Unknown Date";

              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm md:text-lg border border-black rounded-lg p-4"
                >
                  {/* Date */}
                  <div className="font-bold text-black w-1/4 text-xs lg:text-lg text-center">{formattedDate}</div>

                  {/* Location & City */}
                  <div className="w-1/2 text-center text-black font-semibold">
                    {show?.location},<br/> {show?.city}
                  </div>

                  {/* Time */}
                  <div className="w-1/6 text-center text-sm text-black">{show?.time}</div>

                  {/* Buy Tickets Button */}
                  <button className="bg-red-900 text-white text-xs md:text-sm lg:px-4 lg:py-2 ml-2 p-1 rounded hover:scale-105 transition-transform">
                    Buy Tickets
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No tour dates available.</p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default TourDates;