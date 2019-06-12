import React from 'react'

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

export default DynamicImport
