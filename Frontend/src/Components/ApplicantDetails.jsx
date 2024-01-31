import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ApplicantDetails() {
  const [allApplicants, setAllApplicants] = useState([])
  const id = useParams()


  console.log(id)
  typeof (id)

  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then(res => res.json())
      .then(data => setAllApplicants(data))
      .catch(err => console.log(err)
      )
  }, [])
  const result = allApplicants.filter((a) => a._id === id.id)
  return (
    <>
      <h1>..appllican</h1>
      <div className='container p-4'>


        {
          result.map((item) => {

            return (
              <div key="i" className="row p-2 bg-light rounded-3">
                <div className="col col-md-3 p-2 mx-auto">
                  <p className='p-2'>Applicant Name : <span className='px-2'>{item.userId.username}</span></p>
                  <p className='p-2'>Applicant Email: <span className='px-2'>{item.userId.email}</span></p>
                  <p className='p-2'>Applicant Tel no: <span className='px-2'>xxxxxxx</span></p>
                </div>

                <div className="col col-md-3 p-2 mx-auto">
                  <p className='p-2'>Job Title : <span className='px-2'>{item.jobId.jobTitle}</span></p>
                  <p className='p-2'>Company : <span className='px-2'></span>{item.jobId.companyName}</p>
                  <p className='p-2'>Job Location : <span className='px-2'>{item.jobId.jobLocation}</span></p>
                </div>


                <div className="col col-md-3 p-2 mx-auto">
                  <p className='p-2'>Posted Date: <span className='px-2'>{item.jobId.postDate}</span></p>
                  <p className='p-2'>Applied Date : <span className='px-2'>{item.applicationDate}</span></p>
                  <p className='p-2'>CV  : <span className='px-2 text-primary'><a target="blank" href={item.userId.cvLink}>cvlink</a></span></p>
                </div>
              </div>
            )
          })
        }


      </div>
    </>
  )
}
