import React, { useEffect, useState } from 'react'
import Banner from '../src/Components/Banner'
import allJobs from '../public/jobs.json'


const Home = () => {
  const [query, setQuery] = useState("")
  const [categoy, setCategory] = useState(null)
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
  // filter data
  const filterJobs = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  console.log(filterJobs)
  return (
    <div>
      <Banner query={query} handleSearchQuery={handleSearchQuery} />
    </div>
  )
}

export default Home
