import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';

import './menu.scss';

const items = [
  <a key="0" href=""><span>Datastore</span></a>,
  <a key="0" href=""><span>Messages</span></a>,
  <a key="0" href=""><span>Cool</span></a>
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
