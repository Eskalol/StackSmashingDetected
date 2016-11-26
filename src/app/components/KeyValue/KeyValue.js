import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Value from './Value';
import EditValue from './EditValue';
import Metadata from './Metadata';
import * as KeyValueActions from '../../actions/keyValue';

export class KeyValue extends Component {

  componentWillMount() {
    const {actions} = this.props;
    actions.getValue(this.props.keyObject.key, this.props.namespace, this.props.keyObject.id);
  }

  render() {
    return (
      <div>
        {!this.props.keyObject.loading && !this.props.keyObject.metaDataShow && (
          <div className="row">
            <div className="col-lg-12">
              {!this.props.keyObject.metaDataShow && this.props.keyObject.edit && (<EditValue keyObject={this.props.keyObject} namespace={this.props.namespace}/>)}
              {!this.props.keyObject.metaDataShow && !this.props.keyObject.edit && (<Value keyObject={this.props.keyObject} namespace={this.props.namespace}/>)}
            </div>
          </div>
        )}
        {!this.props.keyObject.loading && this.props.keyObject.metaDataShow && (<Metadata keyObject={this.props.keyObject} namespace={this.props.namespace}/>)}
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
