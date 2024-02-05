import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Jobs from './Jobs'
import { JobContext } from '../context/UserContext'
import { } from 'react'

export default function ApplyJob() {
  const id = useParams()
  const jobId = id.id


  const [jobs, setJobs] = useState([])
  const jobIdDes = useContext(JobContext)
  const allJobs = useMemo(() => jobIdDes)
  const [jobSelect, setJobSelect] = useState([])
  const [isLoading, setIsLoading] = useState(true)



  //fetching data
  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:3501/alljobs').then(res => res.json()).then(data => setJobs(data), setIsLoading(false))
  }, [])

  console.log(jobIdDes)
  console.log(allJobs)
  console.log(jobs)

  let jobAll = jobs.filter((jb) => jb?._id === jobId)





  return (<>
    <div className='container col-'>


      <h3 className='text-center'> ApplyJob/</h3>

      <section className='row py-4'>
        {jobs.filter((jobids) => jobids._id === jobId).map((item, index) => {
          return (
            <div key={index} className='col-md-6  px-5'>
              <h3 className='text-center p-2'></h3>
              <p>Job Desx</p>
              <p> -{item._id}
              </p><br />
              <ul>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet, sint, quae rem corrupti delectus nam distinctio saepe dolor eligendi vitae commodi voluptates quasi impedit qui et! Dignissimos, veniam distinctio?</ul>
            </div>
          )
        })
        }
        <div className='col-md-5 mx-auto'>
          <form className='p-2'>
            <div className=" mt-4 row ">
              <div className="mb-3 col-md-5 ">
                <label className="form-label">First Name</label>
                <input type="email" required className="form-control" />

              </div>
              <div className="mb-3 col-md-5 ">
                <label className="form-label">Last Name</label>
                <input type="email" required className="form-control" />

              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="password" required className="form-control" id="phonenumber" />
            </div>

            <div className="mb-3">
              <label className="form-label">CV Link</label>
              <input type="password" required className="form-control" id="cvlink" />
            </div>

            <div className="mb-3">
              <label className="form-label">Social Link</label>
              <input type="password" required className="form-control" id="sociallink" />
            </div>


            <button type="submit" className='btn btn-primary bg-primary my-2' >Apply</button>
          </form>
        </div>


      </section>

    </div>

  </>

  )
}
