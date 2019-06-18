jest.mock('../../utils/utils')
import 'babel-polyfill'
import { initialState, mockStore } from '../__mocks__/reduxMock'
import * as constant from '../../utils/constants'
import contentReducer, {
  getContentStart,
  getContentError,
  getContentSuccess,
  getContent
} from './ContentReducer'

describe('Content Redux', () => {
  it('should return the initial state', () => {
    expect(contentReducer(undefined, {})).toEqual(initialState)
  })

  describe('Start to get the content', () => {
    const payload = { type: constant.GET_CONTENT }

    it('should dispatch getContentStart', () => {
      const store = mockStore(initialState)

      store.dispatch(getContentStart())

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_CONTENT}`, () => {
      const actualState = { ...initialState, loadingContent: true }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('Error to get the content', () => {
    const error = 'Error'
    const payload = { type: constant.GET_CONTENT_ERROR, error }

    it('should dispatch getContentError', () => {
      const store = mockStore(initialState)

      store.dispatch(getContentError(error))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_CONTENT_ERROR}`, () => {
      const actualState = {
        ...initialState,
        content: error,
        loadingContent: false,
        errorContent: true
      }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('Success to get content', () => {
    const content = 'content'
    const payload = { type: constant.GET_CONTENT_SUCCESS, content }

    it('should dispatch getContentSuccess', () => {
      const store = mockStore(initialState)

      store.dispatch(getContentSuccess(content))

      const actions = store.getActions()
      expect(actions).toEqual([payload])
    })

    it(`should handle ${constant.GET_CONTENT_SUCCESS}`, () => {
      const actualState = {
        ...initialState,
        content: content,
        loadingContent: false,
        errorContent: false
      }

      expect(contentReducer(undefined, payload)).toEqual(actualState)
    })
  })

  describe('Get the content', () => {
    it('Success to get the content', () => {
      const store = mockStore(initialState)

      return store.dispatch(getContent()).then(() => {
        const content = { title: 'Content', text: 'content text' }
        const payload = [
          { type: constant.GET_CONTENT },
          { type: constant.GET_CONTENT_SUCCESS, content }
        ]

        const actions = store.getActions()
        expect(actions).toEqual(payload)
      })
    })
  })
})
