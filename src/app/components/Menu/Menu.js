import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';

const items = [
  <a key="0" href=""><i className="fa fa-database"/><span>Datastore</span></a>,
  <a key="0" href=""><i className="fa fa-comment"/><span>Messages</span></a>,
  <a key="0" href=""><i className="fa fa-calendar-o"/><span>Calendar</span></a>
];

export default class extends Component {

  getInitialState() {
    return {hidden: false};
  }

  show() {
    this.setState({hidden: false});
  }

  render() {
    const Menu = BurgerMenu.bubble;
    return (
      <Menu id="bubble" pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        {items}
      </Menu>
      );
  }

}
