import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/AnalysisTypes';

export function requestNamespaces() {
  return {
    type: REQUEST_NAMESPACES
  };
}

export function receiveNamespaces(namespaces) {
  return {
    type: RECEIVE_NAMESPACES,
    itemCnt: namespaces.length,
    namespaces,
    receivedAt: Date.now()
  };
}

export function requestKeys() {
  return {
    type: REQUEST_KEYS
  };
}
export const receiveKeys = (keys, namespace) => ({type: RECEIVE_KEYS, receivedAt: Date.now(), keyCnt: keys.length, namespace});

function getKeys(namespace) {
  return dispatch => {
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
      console.log("Amount of keys: ", json.length);
      dispatch(receiveKeys(json, namespace));
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
    }).then(namespaces => {
      dispatch(receiveNamespaces(namespaces));
      namespaces.forEach(namespace => {
        dispatch(getKeys(namespace));
      });
    }).catch(error => {
      console.log("Error:");
      console.log(error.message);
    });
  };
}
