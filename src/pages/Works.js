import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { urlFor, client } from '../components/client';
import { transition1 } from '../transitions';
import {GiVerticalFlip} from 'react-icons/gi'
import {GiHorizontalFlip} from 'react-icons/gi'
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';

const Works = () => {

  const categories = ["All", "Portrait", "City", "Nature", "Black and White", "Polaroid"]
  const directions = [<GiVerticalFlip/>, <GiHorizontalFlip/>, "Both"]
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [direction, setDirection] = useState([])
  const [activeDirection, setActiveDirection] = useState('Both')
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  


  const handleWorkFilter = (category) => {

    setActiveFilter(category);

    setCurrentPage(1)

  

    console.log(category)
    setTimeout(() => {

      if (category === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(category)));
      }
    }, 500);
  };


  const handleDirection = (direction) => {
     
    setActiveDirection(direction);

    console.log(direction)
    setTimeout(() => {

      if (direction === 'Both') {
        setDirection(filterWork);
      } else {
        setDirection(filterWork.filter((work) => work.tags.includes(direction)));
      }
    }, 500);
    

  }


  useEffect(() => {
    const query = '*[_type == "pictures"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data)
    });

  }, []);

  if(!works) return <h1 className='h1'><Loading/></h1>



  console.log(works)
  works.map((work) => { console.log(work.category)})

  console.log(filterWork)

  

  

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterWork.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (number) => setCurrentPage(number)

  return (
    <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='overflow-auto bg-black'
  >
    <div className='container mx-auto h-full relative'>
      
    <div>

    <div className=' flex flex-col lg:mt-20 lg:flex-row h-full mt-2 items-center lg:justify-center gap-x-24 text-center pt-24 pb-8'>
    <h1 className='h1 text-gray-200'>Gallery</h1>

    {/* {categories.map((category) => (

        <div className='flex flex-col'>
        <button className={`h1 text-lg hover:scale-110 ${activeFilter === category ? 'text-yellow-600 animate-bounce' : '' }`} onClick={() => handleWorkFilter(category)}>{category}</button>
        </div>
    ))}

    <div className='hidden flex text-end lg:flex-row h-full gap-x-4 items-center mt-4 lg:mt-0 justify-start'>
        <GiVerticalFlip className={`bg-yellow-400 rounded-full hover:scale-110 cursor-pointer h1 p-1 text-4xl ${activeDirection === "Vertical" ? 'text-white' : ''}`}
        onClick={() => handleDirection("Vertical")}
        />
        <GiHorizontalFlip className={`bg-yellow-400 rounded-full hover:scale-110 cursor-pointer h1 p-1 text-4xl ${activeDirection === "Horizontal" ? 'text-white' : ''}`}
        onClick={() => handleDirection("Horizontal")}
        />
        <h1 className={`bg-yellow-400 rounded-full h1 hover:scale-110 cursor-pointer p-1 text-2xl ${activeDirection === "Both" ? 'text-white' : ''}`}
        onClick={() => handleDirection("Both")}
        >Both</h1>
    </div>

    <div className='hidden flex text-end lg:flex-row h-full gap-x-4 items-center mt-4 lg:mt-0 justify-start'>

    {directions.map((direction) => (
        <div className={`bg-yellow-400 rounded-full h1 p-2 hover:scale-110 cursor-pointer text-2xl ${activeDirection === direction ? 'text-white' : ''}`}
        onClick={() => handleDirection(direction)}
        >{direction}</div>
    ))}
    </div> */}

    </div>
    </div>


    
    <div className='grid grid-cols-2 lg:grid-cols-4 lg:p-4'>
        
    {currentPosts.map((work) => (

<div className='flex w-4/5 ml-5 lg:max-w-[340px] lg:mb-14 mb-10 cursor-pointer'>
  <img
    onClick={() => window.open(urlFor(work?.imgUrl))}
    className='object-cover border-2 border-gray-400 h-full w-full hover:scale-110 transition-all duration-500'
    src={urlFor(work?.imgUrl)}
    alt=''
  />
</div>
      ))}
    </div>

    <Pagination  postsPerPage={postsPerPage} totalPosts={filterWork?.length} paginate={paginate} currentPage={currentPage}/>

    </div>
    </motion.section>
  )
}

export default Works