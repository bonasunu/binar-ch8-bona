import React from 'react'
import Dashboard from './Dashboard'

const Main = ({ allPlayers, mainClass }) => (
  <div className={mainClass}>
    <Dashboard getPlayers={allPlayers} />
  </div>
)

export default Main
