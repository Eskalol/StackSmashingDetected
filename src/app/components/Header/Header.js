import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export class Header extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  getHeaderText() {
    return this.props.ht;
  }

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-5"><h1>{this.getHeaderText()}</h1></div>

            <div className="col-sm-3">
              <i className="fa fa-search fa-2x" aria-hidden="true"/>
              <input type="text" id="search" className="input-box" placeholder="Search..."/>
            </div>

            <div className="col-sm-1 analysis-button">
              <i className="fa fa-bar-chart fa-2x" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </header>
    );
  }

}

Header.propTypes = {
  ht: React.PropTypes.string.isRequired
};

/**
 * grabs header from store in state and map to props
 * @param  {json} state application state
 * @return {json}       props
 */
function mapStateToProps(state) {
  return state.header;
}

export default connect(mapStateToProps)(Header);
