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
          allApplicants.filter((a) => a._id === id.id).map((item) => {

            return (
              <div key="i" className="row p-2 bg-light rounded-3">
                <div className="col col-md-4 p-1 mx-auto">
                  <p className='text-center fw-bold py-2'>Applicant Info</p>
                  <p className='p-1'>Name : <span className='px-2'>{item.userId.username}</span></p>
                  <p className='p-1'>Email: <span className='px-2'>{item.userId.email}</span></p>
                  <p className='p-1'>Tel no: <span className='px-2'>xxxxxxx</span></p>
                  <p className='p-1'>Status:
                    <span
                      className={item.applicationStatus === 'success' ? successStyle : failStyle}>
                      {item.applicationStatus}
                    </span>
                  </p>

                </div>

                <div className="col col-md-4 p-1 mx-auto">
                  <p className='text-center fw-bold py-2'>Job Info</p>
                  <p className='p-1'>Title : <span className='px-2'>{item.jobId.jobTitle}</span></p>
                  <p className='p-1'>Company : <span className='px-2'></span>{item.jobId.companyName}</p>
                  <p className='p-1'>Location : <span className='px-2'>{item.jobId.jobLocation}</span></p>
                </div>


                <div className="col col-md-4 p-1 mx-auto">
                  <p className='text-center fw-bold py-2'>Other Info</p>
                  <p className='p-1'>Posted Date: <span className='px-2'>{item.jobId.postDate}</span></p>
                  <p className='p-1'>Applied Date : <span className='px-2'>{item.applicationDate}</span></p>
                  <p className='p-1'>CV  : <span className='px-2 text-primary'><a target="blank" href={item.userId.cvLink}>cvlink</a></span></p>
                </div>

              </div>
            )
          })
        }
        <div className='mx-4 my-3'>
          <div className="btn btn-sm px-3 btn-success " onClick={handleInvite}>Invite</div>
          <div className="btn btn-sm  mx-3 btn-info" onClick={handleDisqualify}>Disqualify</div>
        </div>

      </div>

    </>

  )


}
