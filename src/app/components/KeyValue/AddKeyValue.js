import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

export class AddKeyValue extends Component {
  getButton() {
    return (<i
      className="fa fa-plus-square-o fa-4x fa-foreground"
      aria-hidden="true"
      onClick={
        function () {
          this.props.actions.toggleAdd();
        }
      }
      />);
  }

  getField() {
    return (<div>
      <div className="col-sm-8">
        <div className="align-left">
          <input className="input-line" value="key"/>
        </div>
      </div>
      <input className="input-line" value="value"/>
      <div className="col-sm-1">
        <div className="align-right">
          <i className="fa fa-envelope-open fa-2x fa-foreground" aria-hidden="true"/>
        </div>
      </div>
    </div>);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                  {this.props.add ? this.getField() : this.getButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddKeyValue.propTypes = {
  actions: React.PropTypes.object.isRequired,
  add: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  console.log(state.keyValues);
  return state.keyValues;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeyValue);
