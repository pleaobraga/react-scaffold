import React from 'react'
import PropTypes from 'prop-types'

class DynamicImport extends React.Component {
  state = {
    component: null
  }

  componentDidMount() {
    const { loadComponent, ErrorComponent } = this.props

    loadComponent()
      .then(comp => {
        comp.default
          ? this.setState({ Component: comp.default })
          : this.setState({ Component: ErrorComponent })
      })
      .catch(() => this.setState({ Component: ErrorComponent }))
  }

  render() {
    const { loadingComponent } = this.props
    const { Component } = this.state

    if (Component) {
      return <Component />
    }

    return loadingComponent
  }
}

DynamicImport.defaultProps = {
  ErrorComponent: <div>Error</div>,
  loadingComponent: <div>Loading...</div>
}

DynamicImport.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  ErrorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

export default DynamicImport
