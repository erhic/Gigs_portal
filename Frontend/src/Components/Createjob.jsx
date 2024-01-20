import React from 'react'

export default function Createjob() {
  return (
    <>
      <div className='row mx-auto'>
        <h3 className='text-center mb-4'> Create job</h3>
        <form className='col-md-9 mx-auto'>


          <div className="row">
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Company Name</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Job Title</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Company Logo Link</label>
              <input type="text" class="form-control" />
            </div>
          </div>





          <div className="row">
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" min={1} class="form-label">Minumum Salary</label>
              <input type="Number" class="form-control" />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Maximum Salary</label>
              <input type="Number" class="form-control" />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Salary Type</label>
              <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected></option>
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>
          </div>



          <div className="row">
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" min={1} class="form-label">Job Location</label>
              <input type="Number" class="form-control" />
            </div>

            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" min={1} class="form-label">Experience Level</label>
              <input type="Number" class="form-control" />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label">Employment Type</label>
              <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected></option>
                <option value="Daily">Part Time</option>
                <option value="Monthly">Full Time</option>
                <option value="Weekly">Internship</option>
              </select>
            </div>

          </div>




          <label > Job Description</label><div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>

          </div>
          <button type="submit" class="btn btn-primary text-secondary">Submit</button>
        </form>

      </div>

      {/* "id": 1,
    "": "Coca cola",
    "jobTitle": "Software Engineer",
    "companyLogo": "/images/Linear.png",
    "minPrice": "20",
    "maxPrice": "30",
    "salaryType": "Yearly",
    "jobLocation": "Tatu City",
    "postingDate": "2023-11-03",
    "experienceLevel": "Any experience",
    "employmentType": "Full-time",
    "description": "lorem ipsun lorel llorem ipsim lorem lorem lorem lorem" */}
    </>
  )
}
