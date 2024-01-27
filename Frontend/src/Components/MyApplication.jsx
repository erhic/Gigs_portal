import React, { useEffect } from 'react'

export default function MyApplication() {


  useEffect(() => {
    fetch('http://localhost:3500/appliedjobs').then((res) => res.json()).then((data) => { console.log(data) }).catch((err) => { console.log(err) })
  }, [])
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
            <tr >
              <th scope="row">1</th>
              <td>{ }</td>
              <td>{ }</td>
              <td>{ }</td>
              <td>{ }</td>
              <td>{ }</td>
            </tr>
          </tbody>
        </table>


      </div>
    </section>
  )
}
