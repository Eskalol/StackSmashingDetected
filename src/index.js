import 'babel-polyfill';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './app/store/configureStore';

import Datastore from './app/containers/Datastore';
import Dhis from './app/containers/Dhis';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import Menu from './app/components/Menu/Menu';
import NamespaceList from './app/components/Namespace/NamespaceList';
import KeyValueList from './app/components/KeyValue/KeyValueList';

import './index.scss';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <Menu/>
        <main id="page-wrap">
          <Header/>
            {this.props.children}
          <Footer/>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Dhis}/>
        <Route path="datastore" component={Datastore}>
          <IndexRoute component={NamespaceList}/>
          <Route path="/namespace" component={KeyValueList}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
