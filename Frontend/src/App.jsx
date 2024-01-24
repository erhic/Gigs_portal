import './App.css'
import Navbar from '../Pages/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createjob from "./Components/Createjob";
import ApplyJob from "./Components/ApplyJob";
import MyApplication from "./Components/MyApplication";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Applicants from "./Components/Applicants";
import Home from "./../Pages/Home";
import Private from "./../Pages/Private";

export default function App() {


  return (
    <>


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/applyjobs' element={<ApplyJob />} />
          <Route path='/myapplications' element={<MyApplication />} />
          <Route path='/createjobs' element={<Createjob />} />
          <Route path='/applicants' element={<Applicants />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </>

  )
}


