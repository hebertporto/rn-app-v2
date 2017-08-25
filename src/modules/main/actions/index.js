import {
  NOVEL_FETCH_ALL,
  NOVEL_GET_INFO
} from './types';

export function getInfo() {
  return (dispatch) => {

    const action = {
      type: NOVEL_GET_INFO,
      payload: 'Action BABY !'
    };

    dispatch(action);
  };
}
