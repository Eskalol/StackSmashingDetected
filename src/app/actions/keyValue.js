import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECIEVE_KEYS, RECIEVE_VALUE} from '../constants/keyValueTypes';

export const requestKeys = namespace => ({ type: REQUEST_KEYS, namespace})
export const receiveKeys = keys => ({ type: RECEIVE_KEYS, keys, recievedAt: Date.now()})
export const recieveValue = value => ({ type: RECIEVE_VALUE, value, recievedAt: Date.now()})

export function getKeys(namespace){
  return dispatch => {
    dispatch(requestKeys(namespace));
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
      getValues(json, namespace);
      dispatch(receiveKeys(json));
    }).catch(error => {
      console.log(error.message);
    });
}

export function getValues(keys, namespace) {
  keys.map((key) => {
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
        dispatch(recieveValue(json));
      }.catch(error => {
        console.log(error.message);
      });
    }
  }
}
