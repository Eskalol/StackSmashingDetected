import React, {Component} from 'react';

export default class extends Component {

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-5"><h1>DHIS</h1></div>
            <div className="col-sm-4">
              <i className="fa fa-search fa-2x" aria-hidden="true"/>
              <input type="text" id="search" className="input-box" placeholder="Search..."/>
            </div>
          </div>
        </div>
      </header>
      );
  }

}
