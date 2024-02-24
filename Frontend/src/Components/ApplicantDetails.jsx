import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ApplicantDetails({ children }) {
  //states
  const [allApplicants, setAllApplicants] = useState([])
  const id = useParams()
  const [invite, setInvite] = useState({})
  const parId = id.id

  //styles to apply dynamically
  let successStyl = 'bg-success px-2 py-1 text-light rounded mx-3'
  let failStyl = 'bg-danger px-2 py-1 text-light rounded mx-3'

  // //state for style
  const [successStyle, setSuccessStyle] = useState('')
  const [failStyle, setFailStyle] = useState('')


  //cycle hook
  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then(res => res.json())
      .then(data => setAllApplicants(data))
      .catch(err => console.log(err)
      )
  }, [])

  const handleInvite = () => {
    setInvite({
      applicationStatus: "success"

    })
    setSuccessStyle(successStyl)
  }
  const handleDisqualify = () => {
    setInvite({
      applicationStatus: "disqualified"
    })
    setFailStyle(failStyl)
  }
  useEffect(() => {

  }, [successStyle, failStyle])



  useEffect(() => {
    fetch(`http://localhost:3501/appliedjobs/${parId}`,
      {
        method: 'PUT',
        body: JSON.stringify(invite),
        headers: {
          'Content-Type': "application/json"
        }
      }).then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
  console.log(parId)

  return (
    <>
      <div className='container p-4'>


        {
          allApplicants.filter((a) => a._id === id.id).map((item, index) => {

            return (
              <div key="index" className="grid grid-cols-3 gap-2 p-8 bg-gray-50 rounded">
                <div className=" p-3 sm:col-span-1 w-60  md:col-span-1 bg-gray-100  rounded  ">
                  <p className='text-center font-semibold py-2'>Applicant Info</p>
                  <p className='p-1'>Name : <span className='px-2 text-gray-600'>{item.firstname}</span></p>
                  <p className='p-1'>Email: <span className='px-2 text-gray-600'>{item.userId.email}</span></p>
                  <p className='p-1'>Tel no: <span className='px-2 text-gray-600'>xxxxxxx</span></p>
                  <p className='p-1 text-gray-600'>Status:
                    <span
                      className={item.applicationStatus === 'success' ? successStyle : failStyle}>
                      {' ' + item.applicationStatus}
                    </span>
                  </p>

                </div>

                <div className="  sm:col-span-1 p-3  w-60  col-span-3  bg-gray-100  rounded">
                  <p className='text-center fw-bold py-2 font-semibold'>Job Info</p>
                  <p className='p-1'>Title : <span className='px-8 text-gray-600'>{item.jobId.jobTitle}</span></p>
                  <p className='p-1'>Company : <span className='px-1 text-gray-600'>{item.jobId.companyName}</span></p>
                  <p className='p-1'>Location : <span className='px-2 text-gray-600'>{item.jobId.jobLocation}</span></p>
                </div>


                <div className=" sm:col-span-1 w-60 col-span-1 p-3  bg-gray-100  rounded">
                  <p className='text-center font-semibold py-2'>Other Info</p>
                  <p className='p-1'>Posted Date: <span className='px-4 text-gray-600'>{item.jobId.postDate}</span></p>
                  <p className='p-1'>Applied Date : <span className='px-2 text-gray-600'>{item.applicationDate}</span></p>
                  <p className='p-1'>CV  : <span className='px-2 text-blue-500 '><a target="blank" href={item.userId.cvLink} >cvlink</a></span></p>
                </div>
              </div>

            )
          })
        }
        <div className='flex  justify-center pt-3'>
          <div className="btn px-5 bg-green-400 rounded border-2 border-green-300 text-gray-900 " onClick={handleInvite}>Invite</div>
          <div className="btn mx-3 bg-red-300 rounded px-2 " onClick={handleDisqualify}>Disqualify</div>
        </div>

      </div>

    </>

  )


}
