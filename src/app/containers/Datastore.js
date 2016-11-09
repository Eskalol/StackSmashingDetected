import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';
import * as NamespaceActions from '../actions/namespace';
import NamespaceList from '../components/Namespace/NamespaceList';

class Datastore extends Component {
  constructor(props) {
    super(props);
    console.log("datastore");
    console.log(this.props);
    const {actions} = this.props;
    actions.changeText("Datastore");
    actions.fetchNamespaces();
  }

  render() {
    return (
      <div className="main-container center">
        <NamespaceList/>
      </div>
    );
  }
}

Datastore.propTypes = {
  actions: React.PropTypes.object.isRequired
};

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, HeaderActions, NamespaceActions), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Datastore);
