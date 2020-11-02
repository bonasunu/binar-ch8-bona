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

  // default value if fetch failed
  if (players.length === 0) {
    setPlayers([
      {
        username: 'harrypotter',
        password: '8c54d54c-be71-4f38-84ee-ec6559333751',
        email: 'theboywholive@mail.co.uk',
        experience: 150,
        level: 10,
      },
      {
        username: 'ronweasley',
        password: '98597712-bd1c-4942-a887-fc0ca51b6d5f',
        email: 'mrawesome@mail.co.uk',
        experience: 90,
        level: 7,
      },
      {
        username: 'hermione',
        password: '2374e89b-a80b-40e0-9dd3-4e58f246375d',
        email: 'granger@mail.co.uk',
        experience: 170,
        level: 11,
      },
    ])
  }
  // styling
  const classes = {
    wrapper:
      'overflow-x-hidden lg:h-screen lg:overflow-hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 xl:grid-cols-6',
    navClass: 'bg-gray-800 col-span-1 flex flex-col items-start',
    mainClass: 'overflow-y-auto sm:h-full md:h-full bg-gray-300 col-span-5 p-3',
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
