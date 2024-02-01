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
import { useNavigate } from 'react-router-dom';

import { UserContext } from './context/UserContext';
import { useState } from 'react';

export default function App() {

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("app-user")))

  return (
    <>
      <UserContext.Provider value={{ loggedUser, setLoggedUser }} >
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </>

  )
}


