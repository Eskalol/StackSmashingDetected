import React, {Component} from 'react';
// const LineChart = require('react-chartjs').Line;
import {Line, Bar, Radar, Pie, Doughnut} from 'react-chartjs';

// Add appropriate service call imports when available here

// This graph is straight from the react-chartjs example
// Change as needed when it works
/* export function createGraph(type, chartData, chartOptions) {
  let graph = null;

  if (type === "Line") {
    graph = React.createClass({
      render: function () {
        return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>;
      }
    });
  }
  return graph;
}*/

/* export function analyseNamespaces(){
  // Use the service to get a list of namespaces
  let namespaces = getNamespaces();

  // For each of the namespaces, get their keys
  let keys = namespaces.map(getKeys);

  // Create a graph over how many keys each namespace has
  // namespaces[0] now has its keys at keys[0]

  // Put namespaces and keys together in such a way that createGraph can plot it

  return createGraph("Line", namespaces, null);
}*/

// Analyse the keys in a namespace, using their metadata
// Ideas:
  // Plot keys after creation date
  // Plot keys after last modification date

// Need a "getKeyMetaData(key)" for this to work

/* export function analyseKeys(namespace){

}*/

const mockData = {
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
};

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

export default class AnalyseNamespaces extends Component {
  constructor(props) {
    super(props);
    this.state = {chart: "Line"};
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
  getStateGraph() {
    switch (this.state.chart) {
      case "Line":
        return <Line data={mockData} options={null} width="550" height="250"/>;

      case "Bar":
        return <Bar data={mockData} options={null} width="550" height="250"/>;

      case "Radar":
        return <Radar data={mockData} options={null} width="550" height="250"/>;

      case "Pie":
        return <Pie data={mockData2} options={null} width="550" height="250"/>;

      case "Doughnut":
        return <Doughnut data={mockData2} options={null} width="550" height="250"/>;

      default:
        return <Line data={mockData} options={null} width="550" height="250"/>;
    }
  }

  // Cyclic change of graph state.
  handleGraphChange() {
    /* switch (this.state.chart) {
      case "Line":
        this.setGraph("Bar");
        break;
      case "Bar":
        this.setGraph("Radar");
        break;
      case "Radar":
        this.setGraph("Line");
        break;
      default:
        this.setGraph("Line");
        break;
    }*/
    this.setGraph("Bar");
  }

  render() {
    return (
      <div>
        {this.getStateGraph()}
      </div>
    );
  }
}

// Define possible values in prop
AnalyseNamespaces.propTypes = {
  name: React.PropTypes.string.isRequired
};
