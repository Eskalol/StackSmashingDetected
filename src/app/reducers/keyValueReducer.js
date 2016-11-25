import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_VALUE, RECEIVE_METADATA} from '../constants/keyValueTypes';

const initialState = [

];

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return state;

    case RECEIVE_KEYS:
      return action.keys.map((key, id) => ({
        key,
        id,
        edit: false,
        metaData: {},
        value: {},
        loading: true
      })
    );

    case RECEIVE_VALUE:
      return state.map(key =>
        key.id === action.id ?
          Object.assign({}, key, {value: JSON.stringify(action.value), loading: false}) :
          key
        );

    case RECEIVE_METADATA:
      return state.map(key =>
        key.id === action.id ?
          Object.assign({}, key, {metaData: action.metaData}) :
          key
        );

    default:
      console.log("Default handler");
      return state;
  }
}
