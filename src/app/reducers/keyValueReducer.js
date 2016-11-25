import {REQUEST_KEYS, RECEIVE_KEYS, RECEIVE_VALUE, RECEIVE_METADATA, REQUEST_VALUE} from '../constants/keyValueTypes';

const initialState = {
  items: [],
  loading: false
};

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_KEYS:
      return {
        items: action.keys.map((key, id) => ({
          key,
          id,
          edit: false,
          metaData: {},
          value: {},
          loading: true
        })),
        loading: false
      };

    case RECEIVE_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
            Object.assign({}, key, {value: JSON.stringify(action.value), loading: false}) :
            key
          )
      });

    case RECEIVE_METADATA:
      return state.items.map(key =>
        key.id === action.id ?
          Object.assign({}, key, {metaData: action.metaData}) :
          key
        );
    case REQUEST_VALUE:
      return state;

    default:
      return state;
  }
}
