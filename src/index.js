import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import {getNamespaces/* , getKeys, putKey, deleteKey, deleteKeys */} from "./app/service/service";
import 'todomvc-app-css/index.css';

const store = configureStore();
console.log(getNamespaces());
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
