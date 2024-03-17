import React, { useState, useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"
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

  return (

    <>
      <header className='max-w-screen-2x1 container-fluid mx-auto x1:px-24 px-4 bg-gray-100'>
        <nav className='flex justify-between items-center py-6 '>

          <p className='flex items-center gap-2 text-2x1 text-primary fw-bold fs-5'><span>Gigpark</span></p>
          {/* large devices view */}

          <ul className='hidden md:flex gap-10'>
            {


              loggedData.loggedUser?.username.toLowerCase() === "admin" ?
                (<ul className='hidden md:flex gap-10' ><li className='text-base text-primary'>
                  <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/createjobs">Create Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/applicants">Applicants</NavLink>
                  </li> </ul>) : loggedData.loggedUser !== null ?
                  (<ul className='hidden md:flex gap-10'><li className='text-base text-primary'>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                  </li>
                    <li>
                      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/myapplications">My Applications</NavLink>
                    </li>
                  </ul>) :
                  (<ul className='hidden md:flex gap-10'><li className='text-base text-primary'>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                  </li>
                    <li>
                      <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/myapplications" onClick={() => { alert('Login to view your application') }}> Applications</NavLink>
                    </li>
                  </ul>)
            }

            {

              loggedData.loggedUser == null ? <div className='text-base  font-medium space-x-5'>
                <Link to="/login" className='py-2 px-4 border rounded'>Login</Link>
                <Link to="/register" className='py-2 px-4 border rounded bg-secondary  '>Register</Link>

              </div> :
                <div className='flex'>
                  <p className='fs-3 mx-3 flex'><span className='fs-6 fw-bold px-2'>{loggedData.loggedUser.username}</span><FaRegUserCircle />
                  </p>
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



            <li className='text-gray-400 py-1'><Link to="/login">Login</Link></li>
            <li className='text-gray-400 py-1'><Link to="/register">Register</Link></li>

          </ul>
        </div>
      </header>
    </>
  )
}


