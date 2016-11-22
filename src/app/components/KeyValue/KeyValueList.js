import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import {KeyValue} from '../Key/KeyValue';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValueList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {actions} = this.props;
    actions.fetchKeys(this.props.namespace);
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <Loading/>}
        {
          !this.props.isFetching &&
          this.props.keys.map((value, i) => <KeyValue key={i}/>)
        }
      </div>
    );
  }
}

KeyValueList.propTypes = {
  namespace: React.PropTypes.object.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired,
  keys: React.PropTypes.array.isRequired
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
