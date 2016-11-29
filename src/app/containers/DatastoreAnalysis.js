import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Line, Bar, Radar, Pie, Doughnut} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisActions from '../actions/analysis';

const chartOptions = {
  responsive: true
};

export class DatastoreAnalysis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText("Datastore > Analysis");
    actions.analysisButton(true);
    actions.analysisListUrl("/datastore", true);
    this.props.actions.fetchNamespaces();

    this.state = {
      chart: "Bar"
    };
  }

  // Change graph type
  setGraph(type) {
    if (!type) {
      this.setState({chart: "Line"});
    } else if (type === "Line" || type === "Bar" || type === "Radar") {
      this.setState({chart: type});
    }
  }

  // Return the JSX graph type specified by the state.
  getStateGraph(data) {
    switch (this.state.chart) {
      case "Line":
        return <Line data={data} options={null} width="550" height="250"/>;

      case "Bar":
        return <Bar data={data} options={chartOptions}/>;

      case "Radar":
        return <Radar data={data} options={null} width="550" height="250"/>;

      case "Pie":
        return <Pie data={data} options={null} width="550" height="250"/>;

      case "Doughnut":
        return <Doughnut data={data} options={null} width="550" height="250"/>;

      default:
        return <Line data={data} options={null} width="550" height="250"/>;
    }
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

  // Create dataset for pie and doughnut chart
  createDataSetType2(namespaces, data) {
    return {
      labels: namespaces,
      datasets: [
        {
          data,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  // data is received as [[namespace1, keyCount1], [namespace2, keyCount2] ...]
  // Splits the data into two new arrays containing namespaces and key counts.
  splitDataSet(data) {
    const namespaces = [];
    const dataSet = [];
    data.forEach(elem => {
      namespaces.push(elem[0]);
      dataSet.push(elem[1]);
    });
    return [namespaces, dataSet];
  }

  createDataSet(inputData) {
    const splitData = this.splitDataSet(inputData);
    const namespaces = splitData[0];
    const data = splitData[1];

    switch (this.state.chart) {
      case "Line":
      case "Bar":
      case "Radar":
      default:
        return this.createDataSetType1(namespaces, data);
      case "Pie":
      case "Doughnut":
        return this.createDataSetType2(namespaces, data);
    }
  }

  render() {
    return (
      <div>
        {this.props.loading && <Loading/>}
        {!this.props.loading && (
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sx-2"></div>
            <div className="col-lg-8 col-md-8 col-sx-8">
              <div className="container-header info">Amount of keys in namespaces</div>
              <div className="container info">
                {this.getStateGraph(this.createDataSet(this.props.items))}
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sx-2"></div>
          </div>
        )}
      </div>
    );
  }
}

DatastoreAnalysis.propTypes = {
  items: React.PropTypes.array.isRequired,
  loading: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired
};

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, HeaderActions, AnalysisActions), dispatch)
  };
}

function mapStateToProps(state) {
  return state.analysis;
}

export default connect(mapStateToProps, mapDispatchToProps)(DatastoreAnalysis);
