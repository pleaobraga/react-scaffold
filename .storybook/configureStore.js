import configureStore from 'redux-mock-store'

// const middlewares = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore([])

const store = (initialState = {}) => mockStore(initialState)

export default store
