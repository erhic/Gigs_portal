import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Jobs from './Jobs'
import { JobContext, UserContext } from '../context/UserContext'
import { } from 'react'

export default function ApplyJob() {
  const id = useParams()
  const jobIds = id.id

  const loggedData = useContext(UserContext)

  const [jobs, setJobs] = useState([])
  const jobIdDes = useContext(JobContext)
  const allJobs = useMemo(() => jobIdDes)
  const [jobSelect, setJobSelect] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  // application formm state
  const [applicationInfo, setApplicationInfo] = useState({
    firstname: '',
    lastname: '',
    phoneno: '',
    cvlink: '',
    sociallink: ''
  })


  //fetching data
  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3501/alljobs').then(res => res.json()).then(data => setJobs(data), setIsLoading(false))
  }, [])

  console.log(jobIdDes)
  console.log(allJobs)
  console.log(jobs)

  function handleChange(event) {
    setApplicationInfo((prevInfo) => {
      return { ...prevInfo, [event.target.name]: event.target.value }
    })

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(applicationInfo)
    let loggedUserId = loggedData.loggedUser.userid
    console.log(typeof (loggedUserId))
    let allApplicationInfo = { ['jobId']: jobIds, ['userId']: loggedUserId, ...applicationInfo }
    console.log(allApplicationInfo)
    fetch("http://localhost:3501/applyjob", {
      method: "POST",
      body: JSON.stringify(allApplicationInfo),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then((data) => { console.log('application successful') })
      .catch((err) => { console.log(err) })
  }

  return (<>
    <div className='container col-'>


      <h3 className='text-center'> ApplyJob/</h3>

      <section className='row py-4'>

        {/* job being applied full details */}
        {jobs.filter((jobids) => jobids._id === jobIds).map((item, index) => {
          return (
            <div key={index} className='col-md-6 bg-light py-3 px-5'>
              <h3> Job: <span className='fw-bold'>{item.jobTitle}</span>
                <span className='float-right'> Posted on:<span className=' fw-bold'> {item.postDate}</span></span> </h3>
              <p>  Company: <span className='fw-bold'>{item.companyName}</span>  <span className='float-right'>Deadline: <span className=' fw-bold'> In 14 Days</span></span> </p>
              <p>  Location: <span className='fw-bold'>{item.jobLocation}</span></p>
              <p className='py-3 fw-bold'>Job Description</p>
              <p>{item.companyName} is recruiting for a position of {item.jobTitle} , candidate must have a minimum of {item.experienceType} experince to work at they offices located in {item.jobLocation}.  </p>
              <p>* Qualified candidate are encouraged to apply .</p>
              <ul className='fw-bold py-3'>Role of the job entails: </ul>
              <p>- {item.jobDescription}</p>
              <p className='py-3 mr-3'>Terms: <span className='fw-bold px-2 rounded-3 bg-gray-100 py-2 text-center'> {item.employmentType}</span></p>
            </div>
          )
        })
        }

        {/*  form to make application for specified job  */}
        <div className='col-md-5 mx-auto'>
          <form onSubmit={handleSubmit} className='p-2'>
            <div className=" mt-4 row ">
              <div className="mb-3 col-md-5 ">
                <label htmlFor='firstname' className="form-label">First Name</label>
                <input type="text" name='firstname' required onChange={handleChange} className="form-control" />

              </div>
              <div className="mb-3 col-md-5 ">
                <label className="form-label">Last Name</label>
                <input type="text" name='lastname' required onChange={handleChange} className="form-control" />

              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="number" name='phoneno' required onChange={handleChange} className="form-control" id="phonenumber" />
            </div>

            <div className="mb-3">
              <label className="form-label">CV Link</label>
              <input type="text" value={applicationInfo.cvlink} name='cvlink' required onChange={handleChange} className="form-control" id="cvlink" />
            </div>

            <div className="mb-3">
              <label className="form-label">Social Link</label>
              <input type="text" name='sociallink' required onChange={handleChange} className="form-control" id="sociallink" />
            </div>


            <button type="submit" className='btn btn-primary bg-primary my-2' >Apply</button>
          </form>
        </div>


      </section>

    </div>

  </>

  )
}
