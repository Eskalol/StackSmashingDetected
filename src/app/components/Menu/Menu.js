import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import {decorator} from 'redux-burger-menu';
import {Link} from 'react-router';

const items = [
  <Link to="datastore" key="0"><i className="fa fa-database"/><span>Datastore</span></Link>,
  <a key="1" href=""><i className="fa fa-comment"/><span>Messages</span></a>,
  <a key="2" href=""><i className="fa fa-calendar-o"/><span>Calendar</span></a>,
  <a key="3" href=""><i className="fa fa-search fa" aria-hidden="true"/><input type="text" id="search" placeholder="Search..."/></a>
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
