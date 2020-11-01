import React from 'react'
import Dashboard from './Dashboard'
import CreatePlayerForm from './CreatePlayerForm'

const Main = ({ allPlayers, mainClass }) => (
  <div className={mainClass}>
    <Dashboard getPlayers={allPlayers} />
    <CreatePlayerForm />
  </div>
)

export default Main
