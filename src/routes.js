import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loading'

const DynamicImportFunc = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
    }
    ErrorComponent={ErrorPage}
    loadingComponent={<Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/" component={DynamicImportFunc} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default Routes
