import React from 'react'
import { ApplicantContext } from './Applicants'
import { useContext } from 'react'

export default function ApplicantDetails() {
  const applicant = useContext(ApplicantContext)
  console.log(applicant + '..................')
  return (
    <>
      <h1></h1>
      <div className='container p-4'>
        <div className="row p-2 bg-light rounded-3">
          <div className="col col-md-3 p-2 mx-auto">
            <p className='p-2'>Job ID : <span className='px-2'></span></p>
            <p className='p-2'>Job Title : <span className='px-2'></span></p>
            <p className='p-2'>Job ID : <span className='px-2'></span></p>
          </div>
          <div className="col col-md-3 p-2 mx-auto">
            <p className='p-2'>Applicant Name : <span className='px-2'></span></p>
            <p className='p-2'>Applicant Email: <span className='px-2'></span></p>
            <p className='p-2'>Applicant Tel no: <span className='px-2'></span></p>

          </div>
          <div className="col col-md-3 p-2 mx-auto">
            <p className='p-2'>Job ID : <span className='px-2'></span></p>
            <p className='p-2'>Job ID : <span className='px-2'></span></p>
            <p className='p-2'>Job ID : <span className='px-2'></span></p>

          </div>
        </div>
      </div>
    </>
  )
}
