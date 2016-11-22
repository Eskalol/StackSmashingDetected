import fetch from 'isomorphic-fetch';

import {REQUEST_KEYVALUES, RECEIVE_KEYVALUES} from '../constants/keyValueTypes';

export function requestKeyValues() {
  console.log("key value request");
  return {
    type: REQUEST_KEYVALUES
  };
}

export function receiveKeyValues(json) {
  console.log(json);
  return {
    type: RECEIVE_KEYVALUES,
    keyvalues: json,
    receivedAt: Date.now()
  };
}

export function fetchKeyValues(namespace) {
  return dispatch => {
    dispatch(requestKeyValues());

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
      dispatch(receiveKeyValues(json));
    }).catch(error => {
      console.log(error.message);
    });
  };
}