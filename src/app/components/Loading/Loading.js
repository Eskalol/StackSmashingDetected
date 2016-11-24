import React, {Component} from 'react';

export default class Loading extends Component {

  render() {
    return (
      <div className="loading-container">
        <img src="/assets/rolling.svg" className="loading"/>
      </div>
    );
  }
}
