import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Jobs from '../src/Components/Jobs'
import Banner from '../src/Components/Banner'
import Card from '../src/Components/Card'




const Home = () => {

  //state capture variable
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 5

  //function to set the state of the uery
  const handleSearchQuery = (event) => {
    setQuery(event.target.value)
  }


  //fetching data
  useEffect(() => {
    setIsLoading(true)
    fetch('jobs.json').then(res => res.json()).then(data => setJobs(data), setIsLoading(false))
  }, [])

  console.log(jobs)

  // filter data using title
  const filteredJobsByTitle = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  console.log(filteredJobsByTitle)

  // filter data using radio buttons 
  const handleRadioSelection = (event) => {
    setCategory(event.target.value)
  }

  // filter data using special buttons
  const handleSelectionClick = (event) => {
    setCategory(event.target.value)
  }



  const calcPage = () => {
    const startIndx = (currentPage - 1) * itemPerPage;
    const endIndx = startIndx + itemPerPage;
    return { startIndx, endIndx }
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredJobsByTitle.length / itemPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // function to compose filtering process for all events , this function should return data filtered data 
  const dataFiltered = (jobs, selected, query) => {
    //by default is expected to return all jobs as fetched from backend 
    let filteredJobs = jobs;

    //checks if there is a query/inputs and execute this if code below
    if (query) {
      filteredJobs = filteredJobsByTitle
    }
    // check the select option and return results based on selected option
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()



      ))
    }
    const { startIndx, endIndx } = calcPage()
    filteredJobs = filteredJobs.slice(startIndx, endIndx)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const results = dataFiltered(jobs, category, query)


  return (
    <>
      <Banner query={query} handleSearchQuery={handleSearchQuery} />


      <div className="maindiv container row d-flex mx-auto ">

        <div className=" col-md-3 col-sm-12 bg-light rounded m-1 text-success"> <Sidebar /></div>
        <div className="col-md-6 col-sm-12 bg-light  m-1 rounded-sm">
          {
            isLoading ? (<p>Loading.....</p>) : results.length > 0 ? (<Jobs results={results} />) :
              <>
                <h3>{results.length}</h3>
                <p>No data found</p></>
          }
          {
            results.length > 0 ?
              (<div>
                <button onClick={prevPage}>Previous</button>
                <span>Page{currentPage} of {Math.ceil(filteredJobsByTitle.length / itemPerPage)}</span>
                <button onClick={nextPage}>Next</button>
              </div>) : ""
          }
        </div>
        <div className="  col-md-2 col-sm-12 bg-light m-1 rounded"> RIGHT</div>

      </div>
    </>

  )

}

export default Home
