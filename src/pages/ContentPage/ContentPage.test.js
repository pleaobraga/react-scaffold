jest.mock('../../utils/utils')
import 'babel-polyfill'
import React from 'react'
import { mount } from 'enzyme'
import ContentPage from './ContentPage'
import { Provider } from 'react-redux'
import { mockStore, initialState } from '../../reducers/__mocks__/reduxMock'

describe('Content Page', () => {
  it('should render loading correctly', () => {
    const store = mockStore(initialState)

    const contentPage = mount(
      <Provider store={store}>
        <ContentPage />
      </Provider>
    )

    expect(contentPage).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    const newState = {
      ...initialState,
      content: { text: 'text', title: 'title' }
    }

    const store = mockStore(newState)

    const contentPage = mount(
      <Provider store={store}>
        <ContentPage />
      </Provider>
    )

    expect(contentPage).toMatchSnapshot()
  })

  it('should render error correctly', () => {
    const newState = {
      ...initialState,
      errorContent: true
    }

    const store = mockStore(newState)

    const contentPage = mount(
      <Provider store={store}>
        <ContentPage />
      </Provider>
    )

    expect(contentPage).toMatchSnapshot()
  })
})
