import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Bar} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisNamespaceAction from '../actions/analysisNamespace';

export class NamespaceAnalysis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText(`${this.props.namespaceName} > Analysis`);
    actions.analysisButton(true);
    actions.analysisListUrl(`/namespace?name=${this.props.namespaceName}`, true);

    this.props.actions.getKeys(this.props.namespaceName);
    console.log("this.props.actions: ", this.props.actions);
  }

  getGraph(data) {
    return <Bar data={data} options={null}/>;
  }

  // Create dataset for line, bar and radar chart
  createDataSetType1(namespaces, data) {
    return {
      labels: namespaces,
      datasets: [
        {
          label: "Namespaces",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data
        }
      ]
    };
  }

  createDataSet(inputData) {
    return this.createDataSetType1(["first", "second", inputData], [1, 2, 3]);
  }

  render() {
    return (
      <div>
      {this.props.loading && <Loading/>}
        {!this.props.loading && (
          this.getGraph(this.createDataSet(this.props.items))
        )}
      {console.log("LOADING: ", this.props.loading)}
      {console.log("ITEMS: ", this.props.items)}
      {console.log("ACTIONS: ", this.props.actions)}

      </div>
    );
  }
}

NamespaceAnalysis.propTypes = {
  actions: React.PropTypes.object.isRequired,
  namespaceName: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
  loading: React.PropTypes.bool.isRequired
  // keyCnt: React.PropTypes.int
};

function mapStateToProps(state) {
  return {
    namespaceName: state.routing.locationBeforeTransitions.query.name,
    state: state.analysisNamespace
  };
}

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, HeaderActions, AnalysisNamespaceAction), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NamespaceAnalysis);
