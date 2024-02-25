import React, { useState } from 'react'
import { baseUrl } from '../baseUrl'

export default function Createjob() {
  const [jobInfo, setJobInfo] = useState({
    companyName: '',
    jobTitle: '',
    companyLogo: '',
    minimumSalary: '',
    maximumSalary: '',
    salaryType: '',
    jobLocation: '',
    experienceType: '',
    employmentType: '',
    jobDescription: ''


  })
  const handleChange = (e) => {
    setJobInfo((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${baseUrl}/createjobs`, {
      method: 'POST',
      body: JSON.stringify(jobInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((data) => {
        console.log(data)
        setJobInfo({
          companyName: '',
          jobTitle: '',
          companyLogo: '',
          minimumSalary: '',
          maximumSalary: '',
          salaryType: '',
          jobLocation: '',
          experienceType: '',
          employmentType: '',
          jobDescription: ''
        }
        )
      })
      .catch(err => console.log(err))

  }
  return (
    <>
      <div className=''>

        <form className='m-9 border-2 hover:border-blue-300 rounded' onSubmit={handleSubmit}>



          <div class="border-b border-gray-900/10 pb-4 ">
            <h2 class="text-base font-semibold leading-7 px-5 pt-5 text-gray-900">Create Job</h2>


            <div class="mt-4 grid grid-cols-1 gap-x-9 gap-y-4 sm:grid-cols-6 ">
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Company name</label>
                <div class="mt-2">
                  <input type="text" required name='companyName' onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Job Title</label>
                <div class="mt-2">
                  <input type="text" name='jobTitle' required onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Company Logo Link</label>
                <div class="mt-2">
                  <input type="text" name='companyLogo' required onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Minimum Salary</label>
                <div class="mt-2">
                  <input type="number" required name='minimumSalary' onChange={handleChange}
                    autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Maximum Salary</label>
                <div class="mt-2">
                  <input type="number" required name='minimumSalary' onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Salary Type</label>
                <div class="mt-2">
                  <select required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ri
                  ng-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " name='salaryType' onChange={handleChange}>
                    <option defaultValue=""></option>
                    <option value="Daily">Daily</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Job Location</label>
                <div class="mt-2">
                  <input type="text" name='jobLocation' required onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div><div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Experience Level</label>
                <div class="mt-2">
                  <input type="text" name='experienceType' required onChange={handleChange} autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="sm:col-span-3 px-4">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Salary Type</label>
                <div class="mt-2">
                  <select required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ri
                  ng-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " name='employmentType' onChange={handleChange}>
                    <option defaultValue=""></option>
                    <option value="Parttime">Part Time</option>
                    <option value="Fulltime">Full Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
            </div></div>
          <div class="sm:col-span-3  px-4">
            <label className='block text-sm font-medium leading-6 text-gray-900' > Job Description</label>
            <div className="form-floating mb-3 ">
              <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ri
                  ng-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " required name='jobDescription' onChange={handleChange} placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 text-sm mt-4 px-3 rounded ml-10">
            Submit
          </button>
        </form>

      </div>


    </>
  )
}
