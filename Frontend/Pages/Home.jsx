import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import Jobs from '../src/Components/Jobs'
import Banner from '../src/Components/Banner'
import Card from '../src/Components/Card'
import { baseUrl } from '../src/baseUrl'




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
    fetch(`${baseUrl}/alljobs`).then(res => res.json()).then(data => setJobs(data), setIsLoading(false))
  }, [])

  console.log(jobs)

  // filter data using title
  const filteredJobsByTitle = jobs?.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
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
    //checks if there is a query/inputs and execute this if code   below
    if (query) {
      filteredJobs = filteredJobsByTitle
    }
    // check the select option and return results based on selected option
    if (selected) {
      filteredJobs = filteredJobs?.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) || //calculate salary amount is done here
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
      {/* 
      m-2 grid xl:grid-cols-6 lg:grid-cols-5 gap-12 md:grid-cols-5 mx-3 */}
      <div className=" md:grid grid-cols-5 gap-8 lg:px-12 px-7 py-3">

        < Sidebar handleRadioSelection={handleRadioSelection} />
        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 ">
          {
            isLoading ? (<p>Loading.....</p>) : results.length > 0 ? (<Jobs results={results} />) :
              <>
                <h3>{results.length}</h3>
                <p>No data found</p></>
          }
          {
            results.length > 0 ?
              (<div className='flex justify-center mt-6'>
                <button className='text-sm text-gray-700 px-3' onClick={prevPage}>Previous</button>
                <span className='text-sm text-gray-400 px-1'>Page {currentPage} of {Math.ceil(filteredJobsByTitle.length / itemPerPage)}</span>
                <button className='text-sm text-gray-700 px-3' onClick={nextPage}>Next</button>
              </div>) : ""
          }
        </div>
        {/* <div className=" w-30  bg-slate-500"> RIGHT</div> */}

      </div>
    </>

  )

}

export default Home
