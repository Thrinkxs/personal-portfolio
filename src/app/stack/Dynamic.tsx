import { useState, useEffect } from 'react'
import Stack from './page'

const DynamicComponent = () => {
  const [component, setComponent] = useState<JSX.Element | null>(null)

  useEffect(() => {
    import('./page').then(module => setComponent(<module.default />))
  }, [])

  if (!component) {
    return null
  }

  return component

  // return <Stack />
}

export default DynamicComponent
