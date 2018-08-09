import { combineReducers } from 'redux';
import homeReducer from './home/state/reducers';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
