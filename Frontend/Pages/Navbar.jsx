import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6"
import { FaRegUserCircle } from "react-icons/fa";
import { UserContext } from '../src/context/UserContext'

export default function Navbar() {
  const [isMenuView, setIsMenuView] = useState(false)
  const [isUserLogged, setIsUserLogged] = useState()
  const handleToggler = () => {
    setIsMenuView(!isMenuView)
  }
  // on press logout setup

  const loggedData = useContext(UserContext)
  const navigate = useNavigate()
  console.log(loggedData)
  function logout() {
    localStorage.removeItem('app-user')
    loggedData.setLoggedUser(null)
    navigate('/login')
  }
  console.log(loggedData)

  return (
    <>
      <header className='max-w-screen-2x1 container-fluid mx-auto x1:px-24 px-4 bg-light'>
        <nav className='flex justify-between items-center py-6 '>

          <p className='flex items-center gap-2 text-2x1 text-primary fw-bold fs-5'><span>Gigpark</span></p>
          {/* large devices view */}

          <ul className='hidden md:flex gap-8'>

            <li className='text-base text-primary'>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
            </li>
            {
              loggedData.loggedUser?.username ?
                <div>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/createjobs">Create Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applicants">Applicants</NavLink>
                  </li>
                </div> : <li>
                  <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/myapplications">My Applications</NavLink>
                </li>


            }

            {

              loggedData.loggedUser == null ? <div className='text-base  font-medium space-x-5'>
                <Link to="/login" className='py-2 px-4 border rounded'>Login</Link>
                <Link to="/register" className='py-2 px-4 border rounded bg-secondary  text-white'>Register</Link>

              </div> :
                <div>
                  <p className='fs-3'><FaRegUserCircle /></p>
                  <Link className='fs-6 ' onClick={logout}>Logout</Link></div>
            }
          </ul>




          <div className='md:hidden block'>
            <button onClick={handleToggler}>

              {isMenuView ? <FaXmark className='w-5 h-5 text-primary' /> :
                <FaBarsStaggered
                  className='w-5 h-5 text-primary' />}
            </button>
          </div>
        </nav>

        <div className={`px-4 bg-primary py-5  rounded-sm ${isMenuView ? "" : "hidden"}`}>
          <ul >
            <li className='text-base text-primary'>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applyjob">Apply Jobs</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/myapplications">My Applications</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/createjobs">Create Jobs</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applicants">Applicants</NavLink>
            </li>



            <li className='text-white py-1'><Link to="/login">Login</Link></li>
            <li className='text-white py-1'><Link to="/register">Register</Link></li>

          </ul>
        </div>
      </header>
    </>
  )
}


