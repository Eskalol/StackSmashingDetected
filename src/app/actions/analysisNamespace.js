import {REQUEST_KEYS,
        RECEIVE_KEYS,
        RECEIVE_METADATA} from '../constants/AnalysisNamespaceTypes';

export const receiveKeys = keys => ({type: RECEIVE_KEYS, keys});
export const receiveMetaData = (metaData, key) => ({type: RECEIVE_METADATA, key, created: metaData.created, lastUpdated: metaData.lastUpdated});
export const requestKeys = () => ({type: REQUEST_KEYS});

export const getMetaData = (namespace, key) => {
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
      dispatch(receiveMetaData(json, key));
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
    }).then(keys => {
      dispatch(receiveKeys(keys));
      keys.forEach(key => {
        dispatch(getMetaData(namespace, key));
      });
    }).catch(error => {
      console.log(error.message);
    });
  };
};
