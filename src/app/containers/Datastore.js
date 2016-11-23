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
    actions.analysisListUrl("/datastore-analysis", false);
  }

  render() {
    return (
      <div>
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
    actions: bindActionCreators(Object.assign({}, HeaderActions), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Datastore);
