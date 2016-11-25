import fetch from 'isomorphic-fetch';

import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

export function requestNamespaces() {
  return {
    type: REQUEST_NAMESPACES
  };
}

export function receiveNamespaces(json) {
  return {
    type: RECEIVE_NAMESPACES,
    namespaces: json,
    receivedAt: Date.now()
  };
}
/*
// Fetch key count for a namespace
function getKeyCount(namespace){

}

// Build an array with entries containing namespace and key count
function getKeyCountForEach(namespaces){
  // return namespaces.map();
}
*/

export function fetchNamespaces() {
  return dispatch => {
    dispatch(requestNamespaces());
    return fetch('https://play.dhis2.org/test/api/25/dataStore', {
      method: "GET",
      mode: "cors",
      headers: {
        "Authorization": `Basic ${btoa("admin:district")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      // console.log("Got:");
      // console.log(json);
      dispatch(receiveNamespaces(json));
      return json;
    }).then(namespaces => {
      // Fetch keys here
      // For each namespace, fetch keys
      //
      console.log("Namespaces:");
      console.log(namespaces);
    }).catch(error => {
      console.log("Error:");
      console.log(error.message);
    });
  };
}
