import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

const initialState = {
  isFetching: false,
  items: [],
  keys: []
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_KEYS:
      return {
        keys: action.keys.map((key, id) => ({
          key,
          id,
          edit: false,
          metaData: {},
          value: {},
          isFetching: true
        })),
        isFetching: false
      };
    case REQUEST_NAMESPACES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NAMESPACES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.namespaces
      });
    default:
      return state;
  }
}
