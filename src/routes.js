import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loading'

const WelcomePage = () => (
  <DynamicImport
    loadComponent={() => import('./pages/WelcomePage')}
    ErrorComponent={ErrorPage}
    loadingComponent={<Loading />}
  />
)

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
