import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from './ErrorPage'

describe('welcomePage', () => {
  const errorPage = shallow(<ErrorPage />)

  it('render proprely', () => {
    expect(errorPage).toMatchSnapshot()
  })
})
