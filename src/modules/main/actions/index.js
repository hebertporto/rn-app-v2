import {
  NOVEL_FETCH_ALL,
  NOVEL_GET_INFO
} from './types'

export function getInfo () {
  return (dispatch) => {
    const action = {
      type: NOVEL_GET_INFO,
      payload: 'Action BABY !'
    }
    dispatch(action)
  }
}

export const fetchNovels = () => {
  return (dispatch) => {
    fetch('https://stark-beach-53351.herokuapp.com/api/novels')
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: NOVEL_FETCH_ALL, payload: responseJson.data })
       })
  }
}
