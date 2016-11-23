import React, {Component} from 'react';
// import {connect} from 'react-redux';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

class Wrapper extends Component {

  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <Menu/>
        <main id="page-wrap">
          <Header/>
          <div className="main-container">
            {this.props.children}
          </div>
          <Footer/>
        </main>
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Wrapper;
