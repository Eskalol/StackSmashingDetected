import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_METADATA} from '../constants/keyValueTypes';

export const requestKeys = namespace => ({type: REQUEST_KEYS, namespace});
export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys, receivedAt: Date.now()});
export const receiveMetadata = metadata => ({type: RECEIVE_METADATA, metadata, receivedAt: Date.now()});
// export const receiveValue = value => ({type: RECEIVE_VALUE, value, receivedAt: Date.now()});

/*
const keyFetch = (key, namespace, dispatch) => {
  return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}`, {
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
    dispatch(receiveValue(json));
  }).catch(error => {
    console.log(error.message);
  });
};

const getValues = (keys, namespace, dispatch) => {
  keys.forEach(key => {
    keyFetch(key, namespace, dispatch);
  });
};

*/

export function getKeys(namespace) {
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
      // getValues(json, namespace, dispatch);
      dispatch(receiveKeys(json));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export function deleteKeyValuePair() {

}

export function editValue() {

}

export function getMetadata(namespace, key, id) {
  return dispatch => {
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}/metadata`, {
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
      console.log(json);
      dispatch(receiveMetadata(json, id));
    }).catch(error => {
      console.log(error.message);
    });
  };
}
