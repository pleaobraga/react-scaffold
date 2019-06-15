import * as constant from '../utils/constants'
import { simulateRequest } from '../utils/utils'

const getContentSuccess = content => ({
  type: constant.GET_CONTENT_SUCCESS,
  content
})

const getContentStart = content => ({
  type: constant.GET_CONTENT,
  content
})

const getContentError = error => ({
  type: constant.GET_CONTENT_ERROR,
  error
})

export const getContent = () => dispatch => {
  dispatch(getContentStart())

  return simulateRequest({ title: 'Content', text: 'content Text' })
    .then(response => {
      dispatch(getContentSuccess(response.data))
      return response.data
    })
    .catch(error => getContentError(error))
}

const initialState = {
  content: null,
  loadingContent: false,
  errorContent: false
}

const content = (state = initialState, action) => {
  switch (action.type) {
  case constant.GET_CONTENT:
    return { ...state, loadingContent: true }

  case constant.GET_CONTENT_SUCCESS:
    return {
      ...state,
      content: action.content,
      loadingContent: false,
      errorContent: false
    }

  case constant.GET_CONTENT_ERROR:
    return {
      ...state,
      content: action.error,
      loadingContent: false,
      errorContent: true
    }

  default:
    return state
  }
}

export default content
