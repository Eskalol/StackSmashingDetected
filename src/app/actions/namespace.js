import fetch from 'isomorphic-fetch';

import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

export function requestNamespaces() {
  console.log("cool");
  return {
    type: REQUEST_NAMESPACES
  };
}

export function receiveNamespaces(json) {
  console.log(json);
  return {
    type: RECEIVE_NAMESPACES,
    namespaces: json,
    receivedAt: Date.now()
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
      dispatch(receiveNamespaces(json));
    }).catch(error => {
      console.log(error.message);
    });
  };
}
