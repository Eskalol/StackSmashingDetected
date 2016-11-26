import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

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

export const requestKeys = () => ({type: REQUEST_KEYS});
export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys, receivedAt: Date.now()});

/*
// Fetch key count for a namespace
function getKeyCount(namespace){

}

// Build an array with entries containing namespace and key count
function getKeyCountForEach(namespaces){
  // return namespaces.map();
}
*/

/* function getKeyCount(namespace) {
  return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}`, {
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
    console.log(json.length);
    return json.length;
  }).catch(error => {
    console.log(error);
    return -1;
  });
}*/

export function getKeys(namespace) {
  return dispatch => {
    dispatch(requestKeys());
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}`, {
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
      dispatch(receiveKeys(json));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

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
      // dispatch(receiveNamespaces(json));
      return json;
    }).then(namespaces => {
      // Fetch keys here
      // For each namespace, fetch keys

      // dispatch ny action her
      namespaces.forEach(namespace => {
        console.log("Getting keys for namespace:", namespace);
        getKeys(namespace);
      });

      dispatch(receiveNamespaces(namespaces));
      // console.log(returnObject);
    }).catch(error => {
      console.log("Error:");
      console.log(error.message);
    });
  };
}
