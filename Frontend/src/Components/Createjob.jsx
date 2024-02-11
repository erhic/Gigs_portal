import React, { useState } from 'react'

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
    fetch('http://localhost:3501/createjobs', {
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
      <div className='row mx-auto'>
        <h3 className='text-center mb-4'> Create job</h3>
        <form className='col-md-9 mx-auto' onSubmit={handleSubmit}>


          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label">Company Name</label>
              <input type="text" required name='companyName' onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Job Title</label>
              <input type="text" required name='jobTitle' onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Company Logo Link</label>
              <input type="text" required name='companyLogo' onChange={handleChange} className="form-control" />
            </div>
          </div>





          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label">Minumum Salary</label>
              <input type="number" required name='minimumSalary' onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Maximum Salary</label>
              <input type="number" required name='maximumSalary' onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Salary Type</label>
              <select required className="form-select form-select-sm" name='salaryType' onChange={handleChange}>
                <option defaultValue=""></option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>
          </div>



          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label">Job Location</label>
              <input type="text" required name='jobLocation' onChange={handleChange} className="form-control" />
            </div>

            <div className="mb-3 col-md-4">
              <label className="form-label">Experience Level</label>
              <input type="number" required name='experienceType' onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="employmenttype" className="form-label">Employment Type</label>
              <select required name='employmentType' onChange={handleChange} className="form-select form-select-sm" >
                <option defaultValue=""></option>
                <option value="Parttime">Part Time</option>
                <option value="Fulltime">Full Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

          </div>




          <label > Job Description</label><div className="form-floating mb-3">
            <textarea className="form-control" required name='jobDescription' onChange={handleChange} placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>

          </div>
          <button type="submit" className="btn btn-primary text-secondary">Submit</button>
        </form>

      </div>


    </>
  )
}
