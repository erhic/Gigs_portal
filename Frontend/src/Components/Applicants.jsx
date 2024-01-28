import React, { useEffect, useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
// Create a new context and export
export const applicantContext = createContext();
export default function Applicants() {

  const [applicant, setApplicant] = useState([])
  const [applicationId, setApplicationId] = useState('')
  const [applicantSharedId, setApplicantSharedId] = useState({ sharedApplicant: applicationId })
  const navigate = useNavigate();

  const navigateToApplicantDeatils = () => {
    navigate('/applicantdetails');
  };


  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then(res => res.json())
      .then((data) => {
        setApplicant(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    handleStatus()
  }, [])
  function handleStatus(itemId) {
    console.log(itemId)
    fetch(`http://localhost:3501/appliedjobs/${itemId}`,
      {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationStatus: "success" })
      }

    ).then(res => res.json()
    )
      .catch(err => console.log(err))
    setApplicationId(itemId)

  }
  console.log(applicationId)




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
                      <button className='btn btn-sm btn-primary ' data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={() => { handleStatus(item._id), navigateToApplicantDeatils() }}
                      >View</button></td>
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
export const ApplicantProvider = ({ children }) => {
  return (
    <applicantContext.Provider value={sharedApplicant}>
      {children}
    </applicantContext.Provider>
  )
}
export const useApplicant = () => useContext(applicantContext)