import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import {decorator} from 'redux-burger-menu';

const items = [
  <a href="/" key="0"><i className="fa fa-home"/><span>Home</span></a>
  <a href="/datastore" key="1"><i className="fa fa-database"/><span>Datastore</span></a>,
  <a key="2" href=""><i className="fa fa-comment"/><span>Messages</span></a>,
  <a key="3" href=""><i className="fa fa-calendar-o"/><span>Calendar</span></a>
];

class Menu extends Component {

  getInitialState() {
    return {hidden: false};
  }

  show() {
    this.setState({hidden: false});
  }

  render() {
    const Menu = decorator(BurgerMenu.bubble);
    return (
      <Menu id="bubble" pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        {items}
      </Menu>
    );
  }

}

export default Menu;
