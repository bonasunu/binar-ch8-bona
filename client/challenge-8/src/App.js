import React, { useEffect, useState } from 'react'
import './styles/main.css'
import Navbar from './components/Navbar'
import playersService from './services/players'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    playersService
      .getAllPlayers()
      .then((response) => setPlayers(response))
      .catch((e) => console.error(e.message))
  }, [])

  return (
    <div className="m-3">
      <Navbar />
      <h1 className="text-red-500">Game Dashboard</h1>
      <p>Total players: {players.length}</p>
    </div>
  )
}

export default App
