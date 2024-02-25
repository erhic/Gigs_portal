import React, { useEffect, useState, createContext, useContext } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from '../context';



export default function Applicants() {

  const [applicant, setApplicant] = useState([])
  //styles to apply dynamically
  let successStyle = 'bg-green-700 px-5 py-1 text-white rounded mx-3 font-semibold'
  let failStyle = 'bg-red-700 px-2 py-1 text-white rounded mx-3 font-semibold'
  let pendingStyle = 'bg-blue-300 text-white px-5 py-1 rounded mx-3 font-semibold'


  useEffect(() => {
    fetch(`${baseUrl}/appliedjob`)
      .then(res => res.json())
      .then((data) => {
        setApplicant(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>

      <div className='flex flex-col p-5'>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden border-2 border-blue-200 rounded hover:border-blue-300 ">
              <table className="table table-hover table-striped min-w-full text-left text-sm font-light  rounded overflow-hidden bg-gray-100  ">
                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr className='border-b bg-blue-200 dark:border-neutral-500 dark:bg-neutral-700'>

                    <th scope="col" class="px-6 py-4">Job Id</th>
                    <th scope="col" class="px-6 py-4">Job Title</th>
                    <th scope="col" class="px-6 py-4">Company</th>
                    <th scope="col" class="px-6 py-4">Applicant Name</th>
                    <th scope="col" class="px-6 py-4">Applicant Email </th>
                    <th scope="col" class="px-6 py-4">Action</th>
                    <th scope="col" class="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody >

                  {
                    applicant.map((item, num) => {

                      return (
                        <tr className='hover:bg-blue-200 ' key={item._id}>
                          <td className='whitespace-nowrap px-6 py-4 font-medium'>{'#' + (num++).toString().padEnd(4, '0')}</td>
                          <td>{item.jobId.jobTitle}</td>
                          <td>{item.jobId.companyName}</td>
                          <td>{item.firstname}</td>
                          <td>{item.userId.email}</td>

                          <td>
                            <Link to={`/applicantdetails/${item._id}`} >
                              <span className='bg-gray-100 border-2 border-blue-200  
                              hover:bg-blue-600 hover:text-white text-blue-600 px-3 py-1 rounded font-semibold' >    View </span></Link> </td>
                          <td><span className={item.applicationStatus === 'success' ? successStyle : item.applicationStatus === 'disqualified' ? failStyle : pendingStyle}>{item.applicationStatus}</span></td>

                        </tr>

                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}
