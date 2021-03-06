import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';
import KeyValueList from '../components/KeyValue/KeyValueList';

export class Namespace extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText(this.props.namespaceName);
    actions.analysisButton(true);
    actions.analysisListUrl(`/namespace-analysis?name=${this.props.namespaceName}`, false);
  }

  render() {
    return (
      <div>
        <KeyValueList namespace={this.props.namespaceName}/>
      </div>
    );
  }
}

Namespace.propTypes = {
  actions: React.PropTypes.object.isRequired,
  namespaceName: React.PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {namespaceName: state.routing.locationBeforeTransitions.query.name};
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Namespace);
