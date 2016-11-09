import fetch from 'isomorphic-fetch';

import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

export function requestNamespaces() {
  console.log("cool");
  return {
    type: REQUEST_NAMESPACES
  };
}

export function receiveNamespaces(json) {
  return {
    type: RECEIVE_NAMESPACES,
    namespaces: json.data,
    receivedAt: Date.now()
  };
}

export function fetchNamespaces() {
  return dispatch => {
    dispatch(requestNamespaces());

    return fetch('http://play.dhis2.org/demo/api/25/dataStore', {
      method: "GET"
    }).then(response => {
      console.log(response);
      console.log(response.body);
      return response.json();
    }).then(json => {
      console.log("imba");
      dispatch(receiveNamespaces(json));
    }).catch(error => {
      console.log(error.message);
      console.log("fetch error");
    });
  };
}
