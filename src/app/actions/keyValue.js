import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_METADATA, RECEIVE_VALUE} from '../constants/keyValueTypes';

export const requestKeys = () => ({type: REQUEST_KEYS});
export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys, receivedAt: Date.now()});
export const receiveMetadata = (metaData, id) => ({type: RECEIVE_METADATA, metaData, id, receivedAt: Date.now()});
export const receiveValue = (value, id) => ({type: RECEIVE_VALUE, value, id, receivedAt: Date.now()});

export const getValue = (key, namespace, id) => {
  return dispatch => {
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
      console.log(`got json ${json}`);
      dispatch(receiveValue(json, id));
    }).catch(error => {
      console.log("Key");
      console.log(error.message);
    });
  };
};

export const getKeys = namespace => {
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
      dispatch(receiveKeys(json));
    }).catch(error => {
      console.log(error.message);
    });
  };
};

// export function deleteKeyValuePair() {

// }

// export function editValue() {

// }

export function getMetadata(namespace, key, id) {
  return dispatch => {
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}/metaData`, {
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
      console.log("METADATA GET");
      console.log(json);
      dispatch(receiveMetadata(json, id));
    }).catch(error => {
      console.log("METADATA FAIL");
      console.log(error.message);
    });
  };
}
