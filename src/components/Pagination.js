    import React from 'react'
    
    const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {

      const pageNumbers = [];

      for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
      }


      const firstPost = (currentPage * postsPerPage) - postsPerPage + 1
      const lastPost = (currentPage * postsPerPage) 
       
      console.log(currentPage)

      return (

        <div className='flex justify-center mb-10'>
        
        <nav aria-label="Page navigation example">
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a href="#" onClick={() => paginate(currentPage - 1)} className={`${currentPage === 1 ? "hidden" : ""} block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700`}>
        <span className={`${currentPage === 1 ? "hidden" : ""} sr-only`}>Previous</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    {pageNumbers.map(number => {
  const isCurrentPage = currentPage === number;
  const isWithinRange = Math.abs(currentPage - number) <= 2;

  if (isCurrentPage || isWithinRange) {
    return (
      <li key={number}>
        <a
          onClick={() => paginate(number)}
          href="#"
          className={`${
            isCurrentPage ? 'border-gray-500 border-2 text-white font-bold ' : ''
          } px-3 py-2 leading-tight text-gray-500 bg-black border border-gray-300  hover:border-white`}
        >
          {number}
        </a>
      </li>
    );
  }

  return null; // Skip rendering for numbers outside the desired range
})}
    <li>
      <a href="#" onClick={() => paginate(currentPage + 1)}  className={`${(totalPosts - (currentPage * postsPerPage) < 10) ? "hidden" : ""} block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700`}>
        <span className="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>

        
        </div>
      )
    }
    
    export default Pagination