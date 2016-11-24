import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import KeyValue from './KeyValue';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValueList extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.getKeys(this.props.namespace);
  }

  render() {
    return (
      <div>
        {this.props.loading && <Loading/>}
        {
          !this.props.loading &&
          this.props.keys.map((value, i) => <KeyValue key={i} value={value} namespace={this.props.namespace}/>)
        }
      </div>
    );
  }
}

KeyValueList.propTypes = {
  namespace: React.PropTypes.string.isRequired,
  loading: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired,
  keys: React.PropTypes.array
};

function mapStateToProps(state) {
  return state.keyValues;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyValueList);
