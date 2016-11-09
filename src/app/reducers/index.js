import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';
import {routerReducer} from 'react-router-redux';
import namespacesReducer from './namespacesReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  burgerMenu: menuReducer,
  routing: routerReducer,
  namespaces: namespacesReducer
});

export default rootReducer;
