import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisNamespaceReducer from '../actions/analysis';

export class NamespaceAnalysis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText(`${this.props.namespaceName} > Analysis`);
    actions.analysisButton(true);
    actions.analysisListUrl(`/namespace?name=${this.props.namespaceName}`, true);

    // this.props.actions.getKeys(this.props.namespaceName);
  }

  render() {
    return (
      <div>
      {this.props.loading && <Loading/>}

      </div>
    );
  }
}

NamespaceAnalysis.propTypes = {
  actions: React.PropTypes.object.isRequired,
  namespaceName: React.PropTypes.string.isRequired,
  items: React.PropTypes.array,
  loading: React.PropTypes.array
  // keyCnt: React.PropTypes.int
};

function mapStateToProps(state) {
  return {
    namespaceName: state.routing.locationBeforeTransitions.query.name
  };
}

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, HeaderActions, AnalysisNamespaceReducer), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceAnalysis);
