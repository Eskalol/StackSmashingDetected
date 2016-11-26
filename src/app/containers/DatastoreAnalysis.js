import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {Line, Bar, Radar, Pie, Doughnut} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as AnalysisActions from '../actions/analysis';

export class DatastoreAnalysis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText("Datastore > Analysis");
    actions.analysisButton(true);
    actions.analysisListUrl("/datastore", true);
    this.props.actions.fetchNamespaces();

    this.state = {
      chart: "Bar",
      dataset: null
    };
  }

  // // Change graph type
  // setGraph(type) {
  //   if (!type) {
  //     this.setState({chart: "Line"});
  //   } else if (type === "Line" || type === "Bar" || type === "Radar") {
  //     this.setState({chart: type});
  //   }
  // }

  // // Return the JSX graph type specified by the state.
  // getStateGraph(data) {
  //   switch (this.state.chart) {
  //     case "Line":
  //       return <Line data={data} options={null} width="550" height="250"/>;

  //     case "Bar":
  //       return <Bar data={data} options={null} width="550" height="250"/>;

  //     case "Radar":
  //       return <Radar data={data} options={null} width="550" height="250"/>;

  //     case "Pie":
  //       return <Pie data={data} options={null} width="550" height="250"/>;

  //     case "Doughnut":
  //       return <Doughnut data={data} options={null} width="550" height="250"/>;

  //     default:
  //       return <Line data={data} options={null} width="550" height="250"/>;
  //   }
  // }

  // // Create dataset for line, bar and radar chart
  // createDataSetType1(namespaces) {
  //   return {
  //     labels: namespaces,
  //     datasets: [
  //       {
  //         label: "Namespaces",
  //         fillColor: "rgba(151,187,205,0.2)",
  //         strokeColor: "rgba(151,187,205,1)",
  //         pointColor: "rgba(151,187,205,1)",
  //         pointStrokeColor: "#fff",
  //         pointHighlightFill: "#fff",
  //         pointHighlightStroke: "rgba(151,187,205,1)",
  //         data: [1, 2, 3]
  //       }
  //     ]
  //   };
  // }

  // // Create dataset for pie and doughnut chart
  // createDataSetType2(namespaces) {
  //   return {
  //     labels: namespaces,
  //     datasets: [
  //       {
  //         backgroundColor: [
  //           "#FF6080",
  //           "#30A0EB",
  //           "#FFCE50"
  //         ],
  //         hoverBackgroundColor: [
  //           "#FF6080",
  //           "#30A0EB",
  //           "#FFCE50"
  //         ],
  //         data: [1, 2, 3]
  //       }]
  //   };
  // }

  // createDataSet(namespaces) {
  //   switch (this.state.chart) {
  //     case "Line":
  //     case "Bar":
  //     case "Radar":
  //     default:
  //       return this.createDataSetType1(namespaces);
  //     case "Pie":
  //     case "Doughnut":
  //       return this.createDataSetType2(namespaces);
  //   }
  // }

      // {this.props.isFetchingNamespaces && <Loading/>}
      // {
      //   !this.props.isFetchingNamespaces &&
      //   this.getStateGraph(this.createDataSet(this.props.items))
      // }
      // {this.props.isFetchingKeys && <Loading/>}
      // {
      //   !this.props.isFetchingKeys &&
      //   console.log("KEYS:", this.props.keys)
      // }
  render() {
    return (
      <div>
        {this.props.loading && <Loading/>}
        {!this.props.loading && (
          <span>{this.props.items}</span>
        )}
      </div>
    );
  }
}

DatastoreAnalysis.propTypes = {
  items: React.PropTypes.array.isRequired,
  // keys: React.PropTypes.array.isRequired,
  // isFetchingNamespaces: React.PropTypes.bool.isRequired,
  // isFetchingKeys: React.PropTypes.bool.isRequired,
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
