import 'babel-polyfill';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './app/store/configureStore';

import Datastore from './app/containers/Datastore';
import Dhis from './app/containers/Dhis';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';
import Menu from './app/components/Menu/Menu';

import './index.scss';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

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
  children: React.Component
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dhis}/>
        <Route path="datastore" component={Datastore}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
