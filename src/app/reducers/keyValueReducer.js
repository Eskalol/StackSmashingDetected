import {REQUEST_KEYVALUES, RECEIVE_KEYVALUES} from '../constants/keyValueTypes';

const initialState = {
  isFetching: false,
  items: []
};

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYVALUES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_KEYVALUES:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.keyvalues
      });
    default:
      return state;
  }
}
