import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Namespace from './Namespace';
import Loading from '../Loading/Loading';
import * as NamespaceActions from '../../actions/namespace';

class NamespaceList extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.fetchNamespaces();
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <Loading/>}
        {
          !this.props.isFetching &&
          this.props.items.map((value, i) => <Namespace key={i} namespace={value}/>)
        }
      </div>
    );
  }
}

NamespaceList.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state.namespaces;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, NamespaceActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceList);
