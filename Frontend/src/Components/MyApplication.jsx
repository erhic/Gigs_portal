import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { baseUrl } from '../baseUrl'

export default function MyApplication() {
  const [jobAplied, setJobApplied] = useState([])
  const user = useContext(UserContext)
  let usersid = user.loggedUser.userid
  useEffect(() => {
    fetch(`${baseUrl}/appliedjobs`)
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

      <div className='flex flex-col p-5'>
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden border-2rounded hover:border-blue-300 ">
              <table className="table table-hover table-striped min-w-full text-left text-sm font-light  rounded overflow-hidden bg-gray-100  ">
                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr className='border-b bg-blue-200 dark:border-neutral-500 dark:bg-neutral-700'>

                    <th scope="col" class="px-6 py-4">#</th>
                    <th scope="col" class="px-6 py-4">Job Id</th>
                    <th scope="col" class="px-6 py-4">Job Title</th>
                    <th scope="col" class="px-6 py-4">Company</th>
                    <th scope="col" class="px-6 py-4">Date Applied</th>
                    <th scope="col" class="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>

                  {

                    jobAplied.length !== 0 ?
                      jobAplied.filter((user) => user.userId._id === usersid).map((item, index) => {

                        return (

                          <tr className='hover:bg-blue-200' key={index}>
                            <td className='whitespace-nowrap px-6 py-4 font-medium'>#</td>
                            <td>{(item.jobId._id).slice(-6)}</td>
                            <td>{(item.jobId.jobTitle).toLowerCase().charAt(0).toUpperCase() + item.jobId.jobTitle.slice(1)}</td>
                            <td>{item.jobId.companyName}</td>
                            <td>{item.applicationDate}</td>
                            <td>{item.applicationStatus}</td>


                          </tr>

                        )
                      })
                      :
                      <tr className=' p-5 absolute text-center flex'><td> No job applied found</td></tr>
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
