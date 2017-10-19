import {
  NOVEL_FETCH_ONE,
} from './types'

export const fetchNovelById = (id) => {
  return (dispatch) => {
    fetch(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
      .then(response => response.json())
      .then((responseJson) => {
          dispatch({ type: NOVEL_FETCH_ONE, payload: responseJson.data })
       })
  }
}
