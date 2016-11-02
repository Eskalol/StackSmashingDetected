import url from '../conf/url';
import axios from 'axios';
import 'babel-polyfill';

export function getNamespaces() {
  axios.get(`${url}/api/25/dataStore/`)
    .then(response => {
      console.log(response);
      return response.data;
    })
     .catch(error => {
       return error;
     });
}

export function getKeys(namespace) {
  axios.get(`${url}/api/25/dataStore/${namespace}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

export function putKey(namespace, key, encrypted = false) {
  const encrypt = encrypted ? '?encrypt=true' : '';

  axios.post(`${url}/api/25/dataStore/${namespace}/${key + encrypt}`)
    .then(response => {
      return response.data;
    })
     .catch(error => {
       return error;
     });
}

export function deleteKeys(namespace) {
  axios.delete(`${url}/api/25/dataStore/${namespace}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}

export function deleteKey(namespace, key) {
  axios.delete(`${url}/api/25/dataStore/${namespace}/${key}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
}
