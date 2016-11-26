import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

const initialState = {
  isFetchingNamespaces: false,
  isFetchingKeys: false,
  items: [],
  keys: []
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        isFetchingKeys: true
      });

    case RECEIVE_KEYS:
      return {
        keys: action.keys.map((key, id) => ({
          key,
          id,
          edit: false,
          metaData: {},
          value: {},
          isFetchingKeys: true
        })),
        isFetchingKeys: false
      };
    case REQUEST_NAMESPACES:
      return Object.assign({}, state, {
        isFetchingNamespaces: true
      });
    case RECEIVE_NAMESPACES:
      return Object.assign({}, state, {
        isFetchingNamespaces: false,
        items: action.namespaces
      });
    default:
      return state;
  }
}
