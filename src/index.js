import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
/* import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
*/
import AnalyseNamespaces from './app/components/Namespace_analysis/NamespaceAnalysis';

import 'todomvc-app-css/index.css';

// const store = configureStore();

/* render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);*/

render(
  <AnalyseNamespaces/>,
  document.getElementById('root')
);
