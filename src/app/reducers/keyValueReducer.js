import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_VALUE} from '../constants/keyValueTypes';

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
        loading: true
      });
    case RECEIVE_KEYS:
      console.log(`Got keys ${action.keys}`);
      return Object.assign({}, state, {
        keys: action.keys,
        loading: false
      });
    case RECEIVE_VALUE:
      console.log("Receiving value");
      console.log(action.value);
      return Object.assign({}, state, {
        values: [...state.values, action.value]
      });
    default:
      console.log("Default handler");
      return state;
  }
}
