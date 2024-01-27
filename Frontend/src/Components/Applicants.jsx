import React, { useEffect, useState } from 'react'

export default function Applicants() {

  const [applicant, setApplicant] = useState([])


  useEffect(() => {
    fetch('http://localhost:3501/appliedjobs')
      .then(res => res.json())
      .then((data) => {
        setApplicant(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])


  function handleStatus(itm) {
    console.log(itm)
    fetch('http://localhost:3501/appliedjobs',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: itm, })
      }
    )
  }
  handleStatus()

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
                    <td>{(num++).toString().padEnd(4, '0')}</td>
                    <td>{item.jobId.jobTitle}</td>
                    <td>{item.jobId.companyName}</td>
                    <td>{item.userId.username}</td>
                    <td>{item.userId.email}</td>
                    <td><button className='btn btn-sm btn-primary ' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleStatus(item._id) }}>View</button></td>
                    <td><span></span></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Applicant Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Job ID :<span> nbhghhg</span>  </p>
              <p>Job Title :<span> nbhghhg</span>  </p>
              <p>Applicant Name:<span> nbhghhg</span>  </p>
              <p>Applicant CV link:<span> nbhghhg</span>  </p>

            </div>
            <div className='mx-auto p-3'>
              <p className='py-2'> <span className='fw-bold px-3'> Stage :1</span> Interview Responce</p>
              <button className='btn btn-sm btn-success px-4 mx-3'>Invite</button>
              <button className='btn btn-sm btn-info px-2'>Disqualify</button>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary bg-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-info">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}