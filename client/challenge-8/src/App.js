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
    wrapper: 'h-screen overflow-hidden grid grid-cols-6',
    navClass: 'bg-gray-800 col-span-1 p-3',
    mainClass: 'bg-gray-200 col-span-5 p-3',
  }

  // render
  return (
    <div className={classes.wrapper}>
      <Navbar navClass={classes.navClass} />
      <Main totalPlayers={players.length} mainClass={classes.mainClass} />
    </div>
  )
}

export default App
