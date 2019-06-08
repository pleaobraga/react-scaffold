import React from 'react'
import { Card } from '../../components'
import redux from 'redux-thunk'

const WelcomePage = () => {

  return (
    <div className='page page--welcome' >
      <Card title="Welcome" text='This is a rect boilerplate' />
    </div>
  )

}

export default WelcomePage