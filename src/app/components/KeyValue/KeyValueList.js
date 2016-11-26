import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import KeyValue from './KeyValue';
import AddKeyValue from './AddKeyValue';
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
      {this.props.add && <AddKeyValue namespace={this.props.namespace}/>}
      {!this.props.add && (
        <div className="row">
          <div className="col-lg-12">
            <i
              className="fa fa-plus-square-o fa-4x fa-foreground"
              aria-hidden="true"
              onClick={this.props.actions.handleToggleAdd}
              />
          </div>
        </div>
      )}
      {this.props.loading && <Loading/>}
      {!this.props.loading && this.props.items.map((value, i) => <KeyValue key={i} keyObject={value} namespace={this.props.namespace}/>)}
      </div>
    );
  }
}

KeyValueList.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  add: React.PropTypes.bool.isRequired,
  items: React.PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(KeyValueList);
