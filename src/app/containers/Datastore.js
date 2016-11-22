import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';

class Datastore extends Component {
  constructor(props) {
    super(props);
    console.log("datastore");
    console.log(this.props);
    const {actions} = this.props;
    actions.changeText("Datastore");
  }

  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    );
  }
}

Datastore.propTypes = {
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired
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
