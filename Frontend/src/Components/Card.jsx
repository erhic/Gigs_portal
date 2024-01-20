import React, { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  const [jobno, setJobNo] = useState([])
  return (<>
    <Link to="/applyjob/">
      <div className='card-font'>
        <div className=' col card d-flex '>
          <p className='location px-4 text-gray'><span className='px-2' ><FiMapPin /></span>{data.jobLocation}</p>
          <div className=" card-header fs-6 fw-bold bg-white"><img className="card-image" src={data.companyLogo}></img>{data.jobTitle}</div>
          <div className="card-body  card-description">{data.description}</div>
        </div>
      </div>
    </Link></>
  )
}

export default Card
