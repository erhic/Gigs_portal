import React, { useEffect, useState, createContext, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ApplicantDetails from './ApplicantDetails';

// Create a new context and export
export default function Applicants() {

  const [applicant, setApplicant] = useState([])
  const [applicationId, setApplicationId] = useState()
  const [user, SetUser] = useState(applicant)


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
              <th scope="col">Applicant Contact</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Action</th>
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
                    <td>{item.userId.username}</td>
                    <td>{item.userId.email}</td>

                    <td>
                      <Link to={`/applicantdetails/${item._id}`} >
                        <span className='btn btn-primary' >    View </span></Link> </td>
                    <td><span>{item.applicationStatus}</span></td>
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
