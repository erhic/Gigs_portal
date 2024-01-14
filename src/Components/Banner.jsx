import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"

const Banner = ({ query, handleSearchQuery }) => {

  return (
    <div className='max-w-screen-2xl container mx-auto x1:px-24  px-4 md:py-20 py-14'>

      <h1 className='text-5xl font-bold text-primary mb-3'>Find your <span className='text-secondary' >new gig</span><span> today</span></h1>
      <p className='text-lg text-primary mb-8 '> Plenty of gigs in the software development and IT sector awaiting your . </p>


      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-insert ring-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary md:w-1/2 w-full'>
            <input type="text" name='title' id="title" placeholder="What role are you looking for?" className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray placeholder:text-gray focus:right-0 sm:text-sm sm:leading-6' onChange={handleSearchQuery} value={query} />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray' />
          </div>
          <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-insert ring-gray focus-within:ring-2 focus-within:ring-inset focus-within:ring-secondary md:w-1/3 w-full'>
            <input type="text" name='title' id="location" placeholder="Location" className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray placeholder:text-gray focus:right-0 sm:text-sm sm:leading-6' />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray' />
            <button type="submit" className='bg-secondary py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Banner