import React from 'react'
import Dashboard from './Dashboard'
import CreatePlayerForm from './CreatePlayerForm'
import FindPlayer from './FindPlayer'
import EditPlayer from './EditPlayer'
import { Switch, Route } from 'react-router-dom'

const Main = ({ allPlayers, mainClass }) => (
  <div className={mainClass}>
    <Switch>
      <Route path="/edit-player">
        <EditPlayer />
      </Route>
      <Route path="/find">
        <FindPlayer />
      </Route>
      <Route path="/create-player">
        <CreatePlayerForm />
      </Route>
      <Route path="/">
        <Dashboard getPlayers={allPlayers} />
      </Route>
    </Switch>
  </div>
)

export default Main
