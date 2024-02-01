import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
import ApplyJob from './Components/ApplyJob.jsx'
import Register from '../Pages/Register.jsx'
import MyApplication from './Components/MyApplication.jsx'
import ApplicantDetails from './Components/ApplicantDetails.jsx'
import Createjob from './Components/Createjob.jsx'
import Applicants from './Components/Applicants.jsx'
import Private from '../Pages/Private.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/login', element: <Login />
      },
      {
        path: '/register', element: <Register />
      },
      {
        path: '/applyjob', element: <Private Component={ApplyJob} />
      },
      {
        path: '/myapplications', element: < Private Component={MyApplication} />
      },
      {
        path: '/applicantdetails/:id', element: <Private Component={ApplicantDetails} />
      },
      {
        path: '/createjobs', element: <Private Component={Createjob} />
      },
      {
        path: '/applicants', element: <Private Component={Applicants} />
      },
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
