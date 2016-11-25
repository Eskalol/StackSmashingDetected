import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValue extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row center">
        <div className="col-lg-12">
          <div className="container">
            <div className="col-lg-6">
              <div className="align-left">
                {this.props.value.key}
              </div>
            </div>
            <div className="col-lg-6">
              <input className="input-line" value="Swanky" disabled/>
              <div className="align-right">
                <i className="fa fa-times fa-2x fa-foreground" aria-hidden="true"/>
                <i className="fa fa-pencil fa-2x fa-foreground" aria-hidden="true"/>
                <i className="fa fa-tag fa-2x fa-foreground" aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

KeyValue.propTypes = {
  value: React.PropTypes.object.isRequired,
  namespace: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyValue);
