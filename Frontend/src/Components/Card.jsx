import React, { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ApplyJob from './ApplyJob'
import { useNavigate } from 'react-router-dom';
import { JobContext } from '../context/UserContext';


const Card = ({ data, onCardClick }) => {
  const { dataPass } = data;

  console.log(data)
  return (<>

    <div className='car' >
      <div className=' col card '>
        <p className='location px-4 text-gray'><span className='px-2' ><FiMapPin /></span>{data.jobLocation}</p>
        <div className=" card-header fs-6 fw-bold bg-white"><img className="card-image" src={data.companyLogo}></img>{data.jobTitle}</div>
        <div className="card-body  card-description">{data.jobDescription
        }</div>
        <div className="div">
          <Link to={`/applyjob/${data._id}`}  ><div className='btn btn-sm btn-primary card-btn'>Apply</div></Link>
        </div>

      </div>
    </div>
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
