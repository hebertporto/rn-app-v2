import {
  NOVEL_FETCH_ALL,
  NOVEL_GET_INFO,
  NOVEL_FETCH_ONE,
  CHAPTER_FECTH
} from './types'

import {
  BASE_URL,
  ALL_NOVELS_ENDPOINT
} from './../../../config/constants'

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
    fetch(`${BASE_URL}${ALL_NOVELS_ENDPOINT}`)
      .then(response => response.json())
      .then((responseJson) => {
        console.log('responseJson', responseJson)
        dispatch({ type: NOVEL_FETCH_ALL, payload: responseJson.data })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }
}

export const fetchNovelById = (id) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/chaptertitles/${id}`)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: NOVEL_FETCH_ONE, payload: responseJson.data })
      })
  }
}

export const fetchChapterById = (id) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/chapter/${id}`)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: CHAPTER_FECTH, payload: responseJson.data[0] })
      })
       .catch(error => console.log('error chapterFecth', error))
  }
}
