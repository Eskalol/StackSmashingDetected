import React from 'react';
const LineChart = require('react-chartjs').Line;

// Add appropriate service call imports when available here


// This graph is straight from the react-chartjs example
// Change as needed when it works
export function createGraph(type, chartData, chartOptions) {
  let graph = null;

  if (type === "Line") {
    graph = React.createClass({
      render: function () {
        return <LineChart data={chartData} options={chartOptions} width="600" height="250"/>;
      }
    });
  }
  return graph;
}


export function analyseNamespaces(){
  // Use the service to get a list of namespaces
  let namespaces = getNamespaces();

  // For each of the namespaces, get their keys
  let keys = namespaces.map(getKeys);

  // Create a graph over how many keys each namespace has
  // namespaces[0] now has its keys at keys[0]


  // Put namespaces and keys together in such a way that createGraph can plot it

  return createGraph("Line", namespaces, null);
}

// Analyse the keys in a namespace, using their metadata
// Ideas:
  // Plot keys after creation date
  // Plot keys after last modification date

// Need a "getKeyMetaData(key)" for this to work

export function analyseKeys(namespace){

}
