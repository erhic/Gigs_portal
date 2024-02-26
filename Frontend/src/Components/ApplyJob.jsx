import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import Jobs from './Jobs'
import { JobContext, UserContext } from '../context/UserContext'
import { } from 'react'
import { baseUrl } from '../baseUrl'

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
    fetch(`${baseUrl}/alljobs`).then(res => res.json()).then(data => setJobs(data), setIsLoading(false))
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
    fetch(`${baseUrl}/applyjob`, {
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
    <div className='container bg-gray-50 px-10 items-center'>
      <section className='row pt-7'>

        {/* job being applied full details */}
        {jobs.filter((jobids) => jobids._id === jobIds).map((item, index) => {
          return (
            <div key={index} className=' '>
              <div className='bg-blue-100  rounded  p-8 flex bgurlpath ' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VZQ7YDyK8ExmLk3vQ4hUjGdzt7Tqk3K-HQ&usqp=CAU)` }}>
                <img src={item.companyLogo} className="w-40 rounded opacity-80" alt="" />
                <div className='px-6'>
                  <p className='text-3xl font-bold '>{item.jobTitle}</p>
                  <p className='text-1xl text-gray-500 pt-1 '>{item.companyName}</p>
                </div>
              </div>

              <div className='  md:grid pt-5 grid-cols-3 gap-2 '>
                <div className=' bg-blue-100 justify p-4 rounded'>
                  <p className='text-base font-semibold text-black text-center pb-1'> Job Overview <br /></p>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Job : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.jobTitle}</p>
                  </div>

                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Company : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.companyName}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Location : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.jobLocation}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Experience level : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.experienceType}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Job Type  : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.employmentType}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Salary  : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.minimumSalary}-{item.maximumSalary}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Date Posted  : </p>
                    <p className='leading-7 px-1 text-gray-600'>{item.postDate}</p>
                  </div>
                  <div className='py-2'>
                    <p className='font-semibold text-gray-700 p-1'>Deadline period: </p>
                    <p className='leading-7 px-1 text-gray-600'>14 Days</p>
                  </div>
                </div>
                <div className=' p-4 col-span-2 justify-end leading-7'>
                  <p className='font-bold pb-4'>Job Description</p>
                  <p>{item.companyName} is recruiting for a position of {item.jobTitle} , candidate must have a minimum of {item.experienceType} year experince , to work at they offices located in {item.jobLocation}.  </p>
                  <p>* Qualified candidate are encouraged to apply .</p>
                  <ul className='font-bold text-gray-600 pt-4 pb-3'>Role of the job entails: </ul>
                  <p className='md:pb-9 sm:pb-7'>- {item.jobDescription}</p>


                  {/*  form to make application for specified job  */}
                  <div className='p-5  bg-gray-100'>


                    <form onSubmit={handleSubmit} >



                      <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Apply Here</h2>


                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                          <div class="sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                            <div class="mt-2">
                              <input type="text" name='firstname' required onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>

                          <div class="sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                            <div class="mt-2">
                              <input type="text" name='lastname' required onChange={handleChange} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>







                          <div class="sm:col-span-2 sm:col-start-1">
                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                            <div class="mt-2">
                              <input type="number" name='phoneno' required onChange={handleChange} autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">CV Link</label>
                            <div class="mt-2">
                              <input type="text" value={applicationInfo.cvlink} name='cvlink' required onChange={handleChange} autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label for="sociallink" class="block text-sm font-medium leading-6 text-gray-900">Social Link</label>
                            <div class="mt-2">
                              <input type="text" name='sociallink' required onChange={handleChange} autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>

                        </div>   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-sm mt-4 px-3 rounded">
                          Submit
                        </button>

                      </div>
                    </form>



                  </div>

                </div>
              </div>
            </div>
          )
        })
        }
      </section>

    </div>

  </>

  )
}
