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

    return Component ? <Component /> : loadingComponent
  }
}

DynamicImport.defaultProps = {
  ErrorComponent: <div id="error">Error</div>,
  loadingComponent: <div id="loading">Loading...</div>
}

DynamicImport.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  ErrorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

export default DynamicImport
