import React from 'react'

export default function ApplyJob() {


  return (<>
    <div className='container col-'>


      <h3 className='text-center'> ApplyJob/</h3>

      <section className='row py-4'>
        <div className='col-md-6  px-5'>
          <h3 className='text-center p-2'>Job Title</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, dolorum. Autem nam et repudiandae corporis, inventore molestias. Amet, dolorum fuga! Accusamus beatae provident amet error facilis eaque officia obcaecati rem!

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa tenetur blanditiis facere odit illo. Asperiores, debitis labore sed fugiat excepturi quam! Culpa fuga atque sit hic ipsam sed, accusamus officia?
          </p><br />
          <ul>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet, sint, quae rem corrupti delectus nam distinctio saepe dolor eligendi vitae commodi voluptates quasi impedit qui et! Dignissimos, veniam distinctio?</ul>
        </div>
        <div className='col-md-5 mx-auto'>
          <form className='p-2'>
            <div className=" mt-4 row ">
              <div className="mb-3 col-md-5 ">
                <label className="form-label">First Name</label>
                <input type="email" required className="form-control" />

              </div>
              <div className="mb-3 col-md-5 ">
                <label className="form-label">Last Name</label>
                <input type="email" required className="form-control" />

              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="password" required className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
              <label className="form-label">CV Link</label>
              <input type="password" required className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
              <label className="form-label">Social Link</label>
              <input type="password" required className="form-control" id="exampleInputPassword1" />
            </div>


            <button type="submit" className='btn btn-primary bg-primary my-2' >Apply</button>
          </form>
        </div>


      </section>

    </div>

  </>

  )
}
