import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
