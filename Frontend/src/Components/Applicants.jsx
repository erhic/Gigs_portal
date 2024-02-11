import React, { useEffect, useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom';



export default function Applicants() {

  const [applicant, setApplicant] = useState([])
  //styles to apply dynamically
  let successStyle = 'bg-success px-2 py-1 text-light rounded mx-3'
  let failStyle = 'bg-danger px-2 py-1 text-light rounded mx-3'



  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then(res => res.json())
      .then((data) => {
        setApplicant(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h3 className='mt-3 mb-2 text-center p-4'>  Applicants/  </h3>

      <div className='col col-md-10 mx-auto'>
        <table className="table table-hover table-striped  ">
          <thead>
            <tr>

              <th scope="col">Job Id</th>
              <th scope="col">Job Title</th>
              <th scope="col">Company</th>
              <th scope="col">Applicant Name</th>
              <th scope="col">Applicant Email </th>
              <th scope="col">Action</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

            {
              applicant.map((item, num) => {

                return (
                  <tr key={item._id}>
                    <td>{'#' + (num++).toString().padEnd(4, '0')}</td>
                    <td>{item.jobId.jobTitle}</td>
                    <td>{item.jobId.companyName}</td>
                    <td>{item.firstname}</td>
                    <td>{item.userId.email}</td>

                    <td>
                      <Link to={`/applicantdetails/${item._id}`} >
                        <span className='btn btn-primary' >    View </span></Link> </td>
                    <td><span className={item.applicationStatus === 'success' ? successStyle : failStyle}>{item.applicationStatus}</span></td>

                  </tr>

                )
              })
            }
          </tbody>
        </table>
      </div>
    </>

  )

}
