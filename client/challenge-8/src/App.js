import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import playersService from './services/players'

function App() {
  const [players, setPlayers] = useState([])

  // fetch all players
  useEffect(() => {
    playersService
      .getAllPlayers()
      .then((response) => setPlayers(response))
      .catch((e) => console.error(e.message))
  }, [])

  // styling
  const classes = {
    wrapper:
      'overflow-x-hidden lg:h-screen lg:overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6',
    navClass: 'bg-gray-800 col-span-1 flex flex-col items-start',
    mainClass: 'sm:h-full md:h-full bg-gray-300 col-span-5 p-3',
  }

  // render
  return (
    <div className={classes.wrapper}>
      <Navbar navClass={classes.navClass} />
      <Main allPlayers={players} mainClass={classes.mainClass} />
    </div>
  )
}

export default App
