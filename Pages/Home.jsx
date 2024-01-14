import React, { useEffect, useState } from 'react'
import Banner from '../src/Components/Banner'



const Home = () => {

  //state capture variable
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState(null)
  const [jobs, setJobs] = useState([])

  //function to set the state of the uery
  const handleSearchQuery = (event) => {
    setQuery(event.target.value)
  }


  //fetching data
  useEffect(() => {
    fetch('jobs.json').then(res => res.json()).then(data => setJobs(data))
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
  }
  return (
    <div>
      <Banner query={query} handleSearchQuery={handleSearchQuery} />
    </div>
  )

}

export default Home
