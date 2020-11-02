import React from 'react'
import Dashboard from './Dashboard'
import CreatePlayerForm from './CreatePlayerForm'
import FindPlayer from './FindPlayer'

const Main = ({ allPlayers, mainClass }) => (
  <div className={mainClass}>
    <Dashboard getPlayers={allPlayers} />
    <CreatePlayerForm />
    <FindPlayer />
  </div>
)

export default Main
