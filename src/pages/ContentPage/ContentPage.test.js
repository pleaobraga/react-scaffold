import React from 'react'
import { shallow } from 'enzyme'
import ContentPage from './ContentPage'

describe('welcomePage', () => {
  const contentPage = shallow(<ContentPage />)

  it('render proprely', () => {
    expect(contentPage).toMatchSnapshot()
  })
})
