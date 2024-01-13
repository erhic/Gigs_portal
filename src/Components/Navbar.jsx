import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const [isMenuView, setIsMenuView] = useState(false)
  const handleToggler = () => {
    setIsMenuView(!isMenuView)
  }
  const navItems = [
    { path: "/", title: "Search" },
    { path: "/job", title: "My Jobs" },
    { path: "/salary", title: "Salary range" },
    { path: "/post-job", title: "Post job" }]

  return (
    <>
      <header>
        <nav>
          <a href="http://" className='flex items-center gap-2 text-2x1 text-black'><span>Gigs Lime</span></a>
          <ul>
            {navItems.map(({ path, title }) => (
              <li key={path}>{title}</li>
            ))}


          </ul>
        </nav>
      </header>
    </>
  )
}


