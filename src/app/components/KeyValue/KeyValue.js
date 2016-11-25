import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValue extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.getValue(this.props.keyObject.key, this.props.namespace, this.props.keyObject.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="align-left">
                  {this.props.keyObject.key}
                </div>
              </div>
              <div className="col-sm-8">
                <div className="align-left">
                  {this.props.keyObject.loading && <Loading/>}
                  {
                    !this.props.keyObject.loading &&
                      <input className="input-line" value={this.props.keyObject.value} disabled/>
                  }
                </div>
              </div>
              <div className="col-sm-1">
                <div className="align-right">
                  <i className="fa fa-times fa-2x fa-foreground" aria-hidden="true"/>
                  <i className="fa fa-pencil fa-2x fa-foreground" aria-hidden="true"/>
                  <i className="fa fa-tag fa-2x fa-foreground" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

KeyValue.propTypes = {
  keyObject: React.PropTypes.object.isRequired,
  namespace: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(KeyValue);
