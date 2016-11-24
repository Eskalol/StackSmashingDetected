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
import DatastoreAnalysis from './app/containers/DatastoreAnalysis';
import NamespaceAnalysis from './app/containers/NamespaceAnalysis';

import './index.scss';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './assets/rolling.svg';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Dhis}/>
        <Route path="/datastore" component={Datastore}/>
        <Route path="/namespace" component={Namespace}/>
        <Route path="/datastore-analysis" component={DatastoreAnalysis}/>
        <Route path="/namespace-analysis" component={NamespaceAnalysis}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
