import React, {Component} from 'react';

import './footer.scss';

export default class extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-5">Something</div>
          <div className="col-sm-3"></div>
        </div>
      </footer>
      );
  }
}
