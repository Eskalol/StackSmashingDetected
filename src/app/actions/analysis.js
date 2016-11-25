import fetch from 'isomorphic-fetch';

import {RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

export function receiveNamespaces(json) {
  return {
    type: RECEIVE_NAMESPACES,
    namespaces: json,
    receivedAt: Date.now()
  };
}

export function fetchNamespaces() {
  return dispatch => {
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
      console.log("Got:");
      console.log(json);
      dispatch(receiveNamespaces(json));
    }).then(namespaces => {
      // Fetch keys here
      console.log("Namespaces:");
      console.log(namespaces);
    }).catch(error => {
      console.log("Error:");
      console.log(error.message);
    });
  };
}
