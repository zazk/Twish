import { combineReducers } from 'redux';
import homeReducer from './home/state/reducers';
// Setup reducer.
const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
