import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './app/store/configureStore';

import Wrapper from './app/containers/Wrapper';
import Dhis from './app/containers/Dhis';
import Datastore from './app/containers/Datastore';
import Namespace from './app/containers/Namespace';

import './index.scss';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Dhis}/>
        <Route name="datastore" path="/datastore" component={Datastore}/>
        <Route name="namespace" path="/namespace(/:name)" component={Namespace}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
