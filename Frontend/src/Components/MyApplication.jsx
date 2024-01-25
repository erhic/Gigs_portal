import React from 'react'

export default function MyApplication() {
  return (


    <section className='row '>

      <h3 className='mt-3 mb-2 text-center'>MyApplication </h3>


      <div className='col col-md-10 mx-auto'>

        <table className="table table-hover table-striped  ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Id</th>
              <th scope="col">Job Title</th>
              <th scope="col">Company</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>#5622728</td>
              <td>IT Support</td>
              <td>Coca Cola</td>
              <td>12/11/2022</td>
              <td>Pending</td>
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
