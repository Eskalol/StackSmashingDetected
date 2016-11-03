import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  header: headerReducer,
  burgerMenu: menuReducer,
  routing: routerReducer
});

export default rootReducer;
