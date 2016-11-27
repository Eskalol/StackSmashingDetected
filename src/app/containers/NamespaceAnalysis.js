import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Radar} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisNamespaceAction from '../actions/analysisNamespace';

const chartOptions = {
  pointLabelFontSize: 20,
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
    // console.log("this.props.actions: ", this.props.actions);
  }

  // Dates, how many keys have been edited on one day

  getGraph(data) {
    return <Radar data={data} options={chartOptions}/>;
  }

  removeTimeStamp(date) {
    // return dates.map(elem => (
    return date.substring(0, date.indexOf('T'));
    // ));
  }

  getUniqueDays(inputData) {
    /* const uniqueDays = [];
    dates.forEach(elem => {
      if (!uniqueDays.includes(elem)) {
        uniqueDays.push(elem);
      }
    });
    return uniqueDays;*/
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

  // dates are each of the dates a key was created/edited
  // uniqueDates are the uniqueDates of dates
  // We want to know how many of the uniqueDates
  getKeysPerDay(dates, uniqueDates) {
    const keysPerDay = uniqueDates.map(() => 0);
    console.log(keysPerDay);
    uniqueDates.forEach((day, i) => {
      dates.forEach(date => {
        if (day === date) {
          keysPerDay[i] += 1;
        }
      });
    });
    return keysPerDay;
  }

  // Create dataset for line, bar and radar chart
  createDataSetType1(inputData) {
    // Get all the dates from inputData
    // let creationDates = [];
    // let lastEditDates = [];

    console.log(inputData);

    // We are not interested in the timestamp, only the date
    inputData.forEach(elem => {
      elem.created = this.removeTimeStamp(elem.created);
      elem.lastUpdated = this.removeTimeStamp(elem.lastUpdated);
    });
    console.log(inputData);

    const uniqueDates = this.getUniqueDays(inputData);
    console.log(uniqueDates);

    // Creating arrays with as many zeroes as uniqueDates is long
    const creationDataSet = uniqueDates.map(() => (0));
    const lastEditDataSet = uniqueDates.map(() => (0));

    inputData.forEach(elem => {
      creationDataSet[uniqueDates.indexOf(elem.created)]++;
      lastEditDataSet[uniqueDates.indexOf(elem.lastUpdated)]++;
    });

    /* creationDates = this.removeTimeStamp(creationDates);
    lastEditDates = this.removeTimeStamp(lastEditDates);

    const dates = [];
    creationDates.forEach(elem => {
      if (!dates.include(elem)) {
        dates.push(elem);
      }
    });
    lastEditDates.forEach(elem => {
      if (!dates.include(elem)) {
        dates.push(elem);
      }
    });

    console.log(dates.length, creationDates.length, lastEditDates.length);

    const creationUniqueDates = this.getUniqueDays(creationDates);
    // Now we have all the unique days where keys were created
    // Need to find out how many keys where created for each day
    const creationKeysPerDay = this.getKeysPerDay(creationDates, creationUniqueDates);

    const lastEditUniqueDates = this.getUniqueDays(lastEditDates);
    const lastEditKeysPerDay = this.getKeysPerDay(lastEditDates, lastEditUniqueDates);

    // Merge last edit days with the creation dates for one set of labels
    // Adding all the days from last edit to creation*/

    return {
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
    };
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
