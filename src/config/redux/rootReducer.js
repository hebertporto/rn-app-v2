import { combineReducers } from 'redux';
// import movies from '../modules/movies/movies.reducer';
import main from './../../modules/main/reducers/index'

const rootReducer = combineReducers({
	main
});

export default rootReducer;
