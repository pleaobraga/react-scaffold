import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Card'

describe('Card', () => {
  const card = shallow(<Loading />)

  it('render proprely', () => {
    expect(card).toMatchSnapshot()
  })
})
