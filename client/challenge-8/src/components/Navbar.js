import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ navClass }) => {
  // styling
  const classes = {
    linkClass:
      'w-full h-10 text-center hover:bg-gray-700 hover:bg-opacity-100 text-gray-500 hover:text-gray-200 visited:bg-red-200 m-1 p-1',
    logoClass:
      'h-16 mt-3 p-1 font-extrabold text-2xl text-gray-100 text-center w-full',
    activeLink: 'bg-gray-700',
  }

  // render
  return (
    <nav className={navClass}>
      <p className={classes.logoClass}>Dashboard</p>
      <NavLink
        className={classes.linkClass}
        activeClassName={classes.activeLink}
        exact
        to="/"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={classes.linkClass}
        activeClassName={classes.activeLink}
        to="/create-player"
      >
        Create Player
      </NavLink>
      <NavLink
        className={classes.linkClass}
        activeClassName={classes.activeLink}
        to="/find"
      >
        Find Player
      </NavLink>
    </nav>
  )
}

export default Navbar
