import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';

import NamespaceList from '../components/Namespace/NamespaceList';

class Datastore extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText("Datastore");
  }

  render() {
    return (
      <div className="main-container center">
        <NamespaceList namespaces={this.props.namespaces}/>
      </div>
    );
  }
}

Datastore.propTypes = {
  actions: React.PropTypes.object.isRequired,
  namespaces: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {namespaces: state.namespaces};
}

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HeaderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Datastore);
