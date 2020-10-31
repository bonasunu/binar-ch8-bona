import React from 'react'

const Main = ({ totalPlayers, mainClass }) => (
  <div className={mainClass}>
    <p className="">Total players: {totalPlayers}</p>
  </div>
)

export default Main
