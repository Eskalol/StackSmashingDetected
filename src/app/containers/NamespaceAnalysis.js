import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Bar, Radar} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisNamespaceAction from '../actions/analysisNamespace';

const chartOptions = {
  pointLabelFontSize: 20,
  responsive: true
};

const barOptions = {
  responsive: true
};

export class NamespaceAnalysis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText(`${this.props.namespaceName} > Analysis`);
    actions.analysisButton(true);
    actions.analysisListUrl(`/namespace?name=${this.props.namespaceName}`, true);

    this.props.actions.getKeys(this.props.namespaceName);
  }

  // Return the specified graph
  getGraph(inputData) {
    const data = inputData[0];
    const chart = inputData[1];
    if (chart === "Bar") {
      return <Bar data={data} options={barOptions}/>;
    }
    return <Radar data={data} options={chartOptions}/>;
  }

  // Remove the timestamp, everything after 'T'
  // 'date' are strings like this: "2016-11-27T20:23:38.144"
  removeTimeStamp(date) {
    return date.substring(0, date.indexOf('T'));
  }

  // Get all the unique days from the input data
  getUniqueDays(inputData) {
    const uniqueDays = [];
    inputData.forEach(elem => {
      if (!uniqueDays.includes(elem.created)) {
        uniqueDays.push(elem.created);
      }
      if (!uniqueDays.includes(elem.lastUpdated)) {
        uniqueDays.push(elem.lastUpdated);
      }
    });
    return uniqueDays;
  }

  // Create dataset for line, bar or radar chart
  createDataSetType1(inputData) {
    // We are not interested in the timestamp, only the date
    inputData.forEach(elem => {
      elem.created = this.removeTimeStamp(elem.created);
      elem.lastUpdated = this.removeTimeStamp(elem.lastUpdated);
    });

    // Getting all the unique dates in a way that if there are dates a key was
    // created but none updated (and vice versa) the date is still included
    const uniqueDates = this.getUniqueDays(inputData);
    let chart = "Radar";
    if (uniqueDates.length <= 2) {
      chart = "Bar";
    }

    // Creating arrays with as many zeroes as uniqueDates is long
    const creationDataSet = uniqueDates.map(() => (0));
    const lastEditDataSet = uniqueDates.map(() => (0));

    // Count how many keys were created and updated on each date
    inputData.forEach(elem => {
      creationDataSet[uniqueDates.indexOf(elem.created)]++;
      lastEditDataSet[uniqueDates.indexOf(elem.lastUpdated)]++;
    });

    return [
      {
        labels: uniqueDates,
        datasets: [
          {
            label: "Creation",
            fillColor: "rgba(151,187,205,0.4)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: creationDataSet
          },
          {
            label: "Last edit",
            fillColor: "rgba(220,220,220,0.6)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: lastEditDataSet
          }
        ]
      },
      chart
    ];
  }

  createDataSet(inputData) {
    return this.createDataSetType1(["first", "second", inputData], [1, 2, 3]);
  }

  render() {
    return (
      <div>
      {this.props.loading && <Loading/>}
      {!this.props.loading && this.getGraph(this.createDataSetType1(this.props.items))}

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
  return Object.assign({}, {
    namespaceName: state.routing.locationBeforeTransitions.query.name
  }, state.analysisNamespace);
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
