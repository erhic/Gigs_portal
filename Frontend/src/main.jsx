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
        path: '/applyjobs', element: <ApplyJob />
      },
      {
        path: '/myapplications', element: <MyApplication />
      },
      {
        path: '/applicantdetails/:id', element: <ApplicantDetails />
      },
      {
        path: '/createjobs', element: <Createjob />
      },
      {
        path: '/applicants', element: <Applicants />
      },
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
