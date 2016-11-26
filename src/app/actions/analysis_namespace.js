import {REQUEST_KEYS,
        RECEIVE_KEYS,
        RECEIVE_METADATA,
        RECEIVE_VALUE,
        REQUEST_VALUE} from '../constants/keyValueTypes';

export const requestKeys = () => ({type: REQUEST_KEYS});
export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys, receivedAt: Date.now()});
export const requestValue = () => ({type: REQUEST_VALUE});
export const receiveMetaData = (metaData, id) => ({type: RECEIVE_METADATA, metaData, id, receivedAt: Date.now()});
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
      dispatch(receiveValue(json, id));
    }).catch(error => {
      console.log(error.message);
    });
  };
};

export const getMetaData = (namespace, key, id) => {
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
      console.log(json);
      dispatch(receiveMetaData(json, id));
    }).catch(error => {
      console.log(error.message);
    });
  };
};

export const getKeys = namespace => {
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
};
