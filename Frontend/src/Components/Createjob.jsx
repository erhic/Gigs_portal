import React from 'react'

export default function Createjob() {
  return (
    <>
      <div className='row mx-auto'>
        <h3 className='text-center mb-4'> Create job</h3>
        <form className='col-md-9 mx-auto'>


          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label">Company Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Job Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Company Logo Link</label>
              <input type="text" className="form-control" />
            </div>
          </div>





          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label">Minumum Salary</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Maximum Salary</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label">Salary Type</label>
              <select className="form-select form-select-sm" >
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
              <input type="Number" className="form-control" />
            </div>

            <div className="mb-3 col-md-4">
              <label className="form-label">Experience Level</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="employmenttype" className="form-label">Employment Type</label>
              <select defaultValue="" className="form-select form-select-sm" >
                <option value="Daily">Part Time</option>
                <option value="Monthly">Full Time</option>
                <option value="Weekly">Internship</option>
              </select>
            </div>

          </div>




          <label > Job Description</label><div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>

          </div>
          <button type="submit" className="btn btn-primary text-secondary">Submit</button>
        </form>

      </div>


    </>
  )
}
