import React from 'react'
import JobType from './JobType'
import Experience from './Experience'
import Salary from './Salary'

export default function Sidebar({ handleRadioSelection, value }) {
  return (<>
    <div className=" col-span-1  rounded  bg-gray-100 ">
      <div className=' mt-3'>
        <p className='text-sm flex justify-center'>Apply Filters</p><br />
        <div className='px-3 flex-row justify-center'>
          <JobType handleRadioSelection={handleRadioSelection} />

          <Experience handleRadioSelection={handleRadioSelection} />

          <Salary handleRadioSelection={handleRadioSelection} />
        </div>
      </div></div>
  </>
  )
}
