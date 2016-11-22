import {REQUEST_KEYS, RECIEVE_KEYS, RECIEVE_VALUE} from '../constants/keyValueTypes';

const initialState = {
  loading: false,
  keys: [],
  values: []
};

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        namespace: action.namespace,
        loading: !state.loading
      });
    case RECIEVE_KEYS:
      console.log(state.keys);
      console.log(state.values);
      return Object.assign({}, state, {
        keys: action.keys,
        loading: !state.loading
      });
    case RECIEVE_VALUE:
      return Object.assign({}, state, {
        values: [...state.values, action.value]
      });
    default:
      return state;
  }
}
