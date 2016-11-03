import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  burgerMenu: menuReducer
});

export default rootReducer;
