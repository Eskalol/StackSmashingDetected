import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import menuReducer from './menuReducer';
import {routerReducer} from 'react-router-redux';
import namespacesReducer from './namespacesReducer';
import keyValueReducer from './keyValueReducer';
import analysisReducer from './analysisReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  burgerMenu: menuReducer,
  routing: routerReducer,
  namespaces: namespacesReducer,
  keyValues: keyValueReducer,
  analysis: analysisReducer
});

export default rootReducer;
