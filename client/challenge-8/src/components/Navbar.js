import React from 'react'

const Navbar = ({ navClass }) => {
  // styling
  const classes = {
    linkClass:
      'w-full h-10 text-center hover:bg-gray-700 hover:bg-opacity-100 text-gray-500 hover:text-gray-200 m-1 p-1',
    logoClass:
      'h-16 mt-3 p-1 font-extrabold text-2xl text-gray-100 text-center w-full',
  }

  // render
  return (
    <nav className={navClass}>
      <p className={classes.logoClass}>Dashboard</p>
      <a href="/home" className={classes.linkClass}>
        Dashboard
      </a>
      <a href="/home" className={classes.linkClass}>
        Create Player
      </a>
      <a href="/home" className={classes.linkClass}>
        Find players
      </a>
    </nav>
  )
}

export default Navbar
