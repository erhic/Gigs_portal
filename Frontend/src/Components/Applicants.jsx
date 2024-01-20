import React from 'react'

export default function Applicants() {
  return (





    <section className='row '>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Applicant Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Job ID :<span> nbhghhg</span>  </p>
              <p>Job Title :<span> nbhghhg</span>  </p>
              <p>Applicant Name:<span> nbhghhg</span>  </p>
              <p>Applicant CV link:<span> nbhghhg</span>  </p>
              <p>Applicant Social links:<span> nbhghhg</span>  </p>
            </div>
            <div className='mx-auto p-3'>
              <p className='py-2'> <span className='fw-bold px-3'> Stage :1</span> Interview Responce</p>
              <button className='btn btn-sm btn-success px-4 mx-3'>Invite</button>
              <button className='btn btn-sm btn-info px-2'>Disqualify</button>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary bg-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-info">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>

      <h3 className='mt-3 mb-2 text-center p-4'>  Applicants/  </h3>


      <div className='col col-md-10 mx-auto'>

        <table className="table table-hover table-striped  ">
          <thead>
            <tr>
              <th scope="col">#</th>
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
            <tr>
              <th scope="row">1</th>
              <td>#6757688</td>
              <td>IT Support</td>
              <td>Coca Cola</td>
              <td>Coca Cola</td>
              <td>0787878677</td>
              <td>12/11/2023</td>
              <td><button className='btn btn-sm btn-primary ' data-bs-toggle="modal" data-bs-target="#exampleModal">View</button></td>
              <td><span></span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>IT Support</td>
              <td>01/12/2024</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>IT Support</td>
              <td>12/12/2023</td>
              <td>@mdo</td>
            </tr>

          </tbody>
        </table>


      </div>
    </section>
  )
}