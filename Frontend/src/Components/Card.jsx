import React, { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ApplyJob from './ApplyJob'
import { useNavigate } from 'react-router-dom';
import { JobContext } from '../context/UserContext';


const Card = ({ data, onCardClick }) => {
  const { dataPass } = data;
  return (<>

    <div className='flex justify-end'>

      <div className='w-40 rounded-xl overflow-hidden m-2 bg-gray-100 border-2'>
        <div className='relative'>
          <img className="h-20 bg-blue-300 object-cover" src={data.companyLogo}></img><span className=' absolute bottom-4 px-11 text-white'>{data.companyName}</span>
        </div>
        <div className='p-2'>
          <p className='flex pt-1 text-sm text-gray-600 '><span className='px-2' ><FiMapPin className='text-sm' /></span>{data.jobLocation}</p>
          <p className="text-sm font-bold pt-2 pl-2 text-gray-700">{data.jobTitle}</p>
          <div className="pt-2 pb-1 flex justify-center">
            <Link to={`/applyjob/${data._id}`}  ><div className='text-sm '><span className='bg-blue-500 px-2  text-xs text-white rounded hover:bg-blue-400 transition ease-out duration-300'>Apply</span></div></Link>
          </div>
        </div>

      </div>
    </div >
    <>
      <JobContext.Provider value={{ data }} >
        <div className='d-none'>
          <ApplyJob></ApplyJob>
        </div>
      </JobContext.Provider>
    </>
  </>
  )
}

export default Card
