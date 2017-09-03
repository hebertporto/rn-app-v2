import {
  NOVEL_FETCH_ALL,
  NOVEL_GET_INFO,
  NOVEL_FETCH_ONE
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

export const fetchNovelById = (id) => {
  return (dispatch) => {
    fetch(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({ type: NOVEL_FETCH_ONE, payload: responseJson.data })
      })
  }
}

// export const novelsChaptersFetch = ({ id }) => {
//   return (dispatch) => {
//     fetch(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
//       .then(response => response.json())
//       .then((responseJson) => {
//           dispatch({ type: NOVEL_FECTH_CHAPTERS_SUCCESS, payload: responseJson.data });
//        });
//   };
// };

// export const chapterFetch = ({ id }) => {
//   return (dispatch) => {
//     fetch(`https://stark-beach-53351.herokuapp.com/api/chapter/${id}`)
//       .then(response => response.json())
//       .then((responseJson) => {
//           dispatch({ type: CHAPTER_FECTH_SUCCESS, payload: responseJson.data[0] });
//        })
//        .catch(error => console.log('error chapterFecth', error));
//   };
// };
