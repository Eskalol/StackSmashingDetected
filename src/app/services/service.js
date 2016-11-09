import axios from 'axios';

export function getNamespaces() {
  return axios.get('play.dhis2.org/demo/api/26/dataStore')
    .then(response => {
      return response;
    })
    .error(response => {
      return response;
    });
}
