import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';

class Datastore extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    console.log(actions);
    actions.changeText("Datastore");
  }

  render() {
    return (
      <div className="main-container center">
        <div>something</div>
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
    actions: bindActionCreators(HeaderActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Datastore);
