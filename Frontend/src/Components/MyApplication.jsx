import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function MyApplication() {
  const [jobAplied, setJobApplied] = useState([])
  const user = useContext(UserContext)
  let usersid = user.loggedUser.userid
  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then((res) => res.json())
      .then((applied_jobs) => {
        setJobApplied(applied_jobs)
        console.log(applied_jobs)
        console.log(jobAplied)
      })
      .catch((err) => { console.log(err) })
  }, [])
  return (


    <section className='row '>

      <h3 className='mt-3 mb-2 text-center'>MyApplication </h3>


      <div className='col col-md-10 mx-auto'>

        <table className="table table-hover table-striped  ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Id</th>
              <th scope="col">Job Title</th>
              <th scope="col">Company</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            {


              jobAplied.filter((user) => user.userId._id === usersid).map((item) => {

                return (

                  <tr key={item.id}>
                    <td>#</td>
                    <td>{(item.jobId._id).slice(-6)}</td>
                    <td>{(item.jobId.jobTitle).toLowerCase().charAt(0).toUpperCase() + item.jobId.jobTitle.slice(1)}</td>
                    <td>{item.jobId.companyName}</td>
                    <td>{item.applicationDate}</td>
                    <td>{item.jobId.companyName}</td>
                    <td>{item.applicationStatus}</td>
                  </tr>


                )
              })

            }

          </tbody>
        </table>


      </div>
    </section>
  )
}
