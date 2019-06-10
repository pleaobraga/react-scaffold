import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

const WelcomePage = React.lazy(() => import('./pages/WelcomePage'))

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default Routes
