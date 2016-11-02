import React, {Component} from 'react';
// const LineChart = require('react-chartjs').Line;
import {Line} from 'react-chartjs';

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

/* function rand(min, max, num) {
  let rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}*/

function mockData() {
  return {
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
        // data: rand(32, 100, 7)
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
        // data: rand(32, 100, 7)
        data: [0, 4, 1, 4, 6, 6, 1]
      }
    ]
  };
}

export default class App2 extends Component {
  render() {
    return (
      <div>
        <Line data={mockData()} options={null} width="550" height="250"/>
      </div>
    );
  }
}
