import './App.css'
import Navbar from '../Pages/Navbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Createjob from "./Components/Createjob";
import ApplyJob from "./Components/ApplyJob";
import MyApplication from "./Components/MyApplication";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import Applicants from "./Components/Applicants";
import Home from "./../Pages/Home";
import Private from "./../Pages/Private";
import ApplicantDetails from './Components/ApplicantDetails';



export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>

  )
}


