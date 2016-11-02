import React, {Component} from 'react';

import './footer.scss';

export default class extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-5"><h3><a href="https://github.com/Eskalol/StackSmashingDetected"><i className="fa fa-github"/> StackSmashingDetected</a></h3></div>
          <div className="col-sm-3"></div>
        </div>
      </footer>
      );
  }
}
