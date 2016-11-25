import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Line, Bar, Radar, Pie, Doughnut} from 'react-chartjs';

import Loading from '../components/Loading/Loading';

import * as HeaderActions from '../actions/header';
import * as NamespaceActions from '../actions/analysis';

/* const mockData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [2, 1, 2, 3, 5, 2, 2]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [0, 4, 1, 4, 6, 5, 1]
    }
  ]
};*/

const mockData2 = {
  labels: ["One", "Two", "Three"],
  datasets: [
    {
      data: [1, 2, 3],
      backgroundColor: [
        "#FF6080",
        "#30A0EB",
        "#FFCE50"
      ],
      hoverBackgroundColor: [
        "#FF6080",
        "#30A0EB",
        "#FFCE50"
      ]
    }]
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
      chart: "Line",
      dataset: this.createDataSet([1, 2, 3, 4])
    };
  }

  // Change graph type, typically called from outside this class.
  setGraph(type) {
    if (!type) {
      this.setState({chart: "Line"});
    } else if (type === "Line" || type === "Bar" || type === "Radar") {
      this.setState({chart: type});
    }
  }

  // Return the JSX graph type specified by the state.
  getStateGraph(data) {
    console.log();
    switch (this.state.chart) {
      case "Line":
        return <Line data={data} options={null} width="550" height="250"/>;

      case "Bar":
        return <Bar data={data} options={null} width="550" height="250"/>;

      case "Radar":
        return <Radar data={data} options={null} width="550" height="250"/>;

      case "Pie":
        return <Pie data={mockData2} options={null} width="550" height="250"/>;

      case "Doughnut":
        return <Doughnut data={mockData2} options={null} width="550" height="250"/>;

      default:
        return <Line data={data} options={null} width="550" height="250"/>;
    }
  }

  createDataSet(namespaces) {
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
          data: [1, 2, 3, 4]
        }
      ]
    };
  }

  // componentWillMount() {
  //   this.props.actions.fetchNamespaces();
  // }

  render() {
    return (
      <div>
      {this.props.isFetching && <Loading/>}
      {
        !this.props.isFetching &&
        this.getStateGraph(this.createDataSet(this.props.items))
      }
      </div>
    );
  }
}

DatastoreAnalysis.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  actions: React.PropTypes.object.isRequired
};

/**
 * maps action to props
 * @param  {dispatch} dispatch
 * @return {json}     json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, HeaderActions, NamespaceActions), dispatch)
  };
}

function mapStateToProps(state) {
  return state.namespaces;
}

export default connect(mapStateToProps, mapDispatchToProps)(DatastoreAnalysis);
