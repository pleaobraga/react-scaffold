import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]

export const mockStore = configureStore(middlewares)

export const initialState = {
  content: null,
  loadingContent: false,
  errorContent: false
}
