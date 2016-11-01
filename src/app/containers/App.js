import React, {Component} from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

export default class App extends Component {
  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <Menu/>
        <main id="page-wrap">
          <Header/>
          <Footer/>
        </main>
      </div>
      );
  }
}
