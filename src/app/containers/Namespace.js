import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';
import KeyValueList from '../components/KeyValue/KeyValueList';

class Namespace extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
    const {actions} = this.props;
    actions.changeText("cool");
  }

  render() {
    return (
      <div>
        <KeyValueList/>
      </div>
    );
  }
}

Namespace.propTypes = {
  actions: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
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

export default connect(null, mapDispatchToProps)(Namespace);
