import React from 'react'
import PropTypes from 'prop-types'

const DynamicImport = ({ loadComponent, loadingComponent, ErrorComponent }) => {
  const [component, setComponent] = React.useState(null)

  React.useEffect(() => {
    loadComponent()
      .then(comp => {
        comp.default
          ? setComponent(comp.default)
          : setComponent(ErrorComponent || <div>Error</div>)
      })
      .catch(() => setComponent(ErrorComponent || <div>Error</div>))
  }, [])

  if (component) {
    return component
  }

  return loadingComponent || <div>Loading...</div>
}

DynamicImport.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  loadingComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  ErrorComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

export default DynamicImport
