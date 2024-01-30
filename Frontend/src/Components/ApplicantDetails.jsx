import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ApplicantDetails() {
  const [userId, setUserId] = useState()
  const id = useParams()

  console.log(id)


  useEffect(() => {

  }, [])
  return (
    <>
      <h1>..appllican</h1>
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
