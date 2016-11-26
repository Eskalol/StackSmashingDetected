import fetch from 'isomorphic-fetch';

import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_METADATA, RECEIVE_VALUE, REQUEST_VALUE, TOGGLE_ADD, TOGGLE_EDIT, DELETE_KEY_VALUE, ADD_KEY_VALUE} from '../constants/keyValueTypes';

export const requestKeys = () => ({type: REQUEST_KEYS});
export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys, receivedAt: Date.now()});
export const requestValue = () => ({type: REQUEST_VALUE});
export const receiveMetaData = (metaData, id) => ({type: RECEIVE_METADATA, metaData, id, receivedAt: Date.now()});
export const receiveValue = (value, id) => ({type: RECEIVE_VALUE, value, id, receivedAt: Date.now()});
export const toggleEdit = id => ({type: TOGGLE_EDIT, id});
export const handleToggleAdd = () => ({type: TOGGLE_ADD});
export const deleteKeyValue = id => ({type: DELETE_KEY_VALUE, id});
export const addKeyValue = (key, value) => ({type: ADD_KEY_VALUE, key, value});

/* GET
  TODO: Fix parameter sequence
  TODO: Fix the names of different functions
  TODO: Check if requestKeys is still needed
*/

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

/* POST */

export const postValue = (namespace, key, value) => {
  return dispatch => {
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}`, {
      method: "POST",
      body: JSON.stringify(value),
      mode: "cors",
      headers: {
        "Authorization": `Basic ${btoa("admin:district")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        dispatch(addKeyValue(key, value));
      }
    }).catch(error => {
      console.log(error.message);
    });
  };
};

/* PUT */

export const putValue = (namespace, key, id, value) => {
  return dispatch => {
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}`, {
      method: "PUT",
      body: JSON.stringify(value),
      mode: "cors",
      headers: {
        "Authorization": `Basic ${btoa("admin:district")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        dispatch(receiveValue(value, id));
      }
    }).catch(error => {
      console.log(error.message);
    });
  };
};

/* DELETE */

export const deleteKeyValuePair = (namespace, key, id) => {
  return dispatch => {
    return fetch(`https://play.dhis2.org/test/api/25/dataStore/${namespace}/${key}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Authorization": `Basic ${btoa("admin:district")}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        dispatch(deleteKeyValue(id));
      }
    }).catch(error => {
      console.log(error.message);
    });
  };
};
