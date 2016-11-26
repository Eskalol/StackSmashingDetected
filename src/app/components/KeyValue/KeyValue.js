import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Value from './Value';
import EditValue from './EditValue';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValue extends Component {

  componentWillMount() {
    const {actions} = this.props;
    actions.getValue(this.props.keyObject.key, this.props.namespace, this.props.keyObject.id);
  }

  render() {
    return (
      <div>
        {!this.props.keyObject.loading && (
          <div className="row">
            <div className="col-lg-12">
              <div className="container">
                {this.props.keyObject.edit && (<EditValue keyObject={this.props.keyObject} namespace={this.props.namespace}/>)}
                {!this.props.keyObject.edit && (<Value keyObject={this.props.keyObject} namespace={this.props.namespace}/>)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

KeyValue.propTypes = {
  keyObject: React.PropTypes.object.isRequired,
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
