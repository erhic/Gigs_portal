import React, { useEffect, useState } from 'react'
import Banner from '../src/Components/Banner'

const Home = () => {
  const [query, setQuery] = useState(null)
  const [categoy, setCategory] = useState("")
  const [jobs, setJobs] = useState("")



  useEffect(() => {

    fetch("jobs.json").then((response) => { response.json }).then(data =>
      setJobs(data))
  }, [])
  const handleSearchQuery = (event) => {
    setQuery(event.target.value)
    console.log(event.target.value)
  }
  return (
    <div>
      <Banner query={query} handleSearchQuery={handleSearchQuery} />
    </div>
  )
}

export default Home
