import * as types from '../actions/types'
import * as main from './reducers'

export const initialState = {
  novels: [],
  info: 'info zerada'
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.NOVEL_FETCH_ALL:
      return main.fetchAllNovels(state, action)
    case types.NOVEL_GET_INFO:
      return main.fetchInfo(state, action)
    default:
      return state
  }
}
