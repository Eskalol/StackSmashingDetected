import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

const initialState = {
  isFetching: false,
  items: ["lol", "hei"]
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NAMESPACES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NAMESPACES:
      return Object.assign({}, state, {
        isFetching: false,
        items: ["cool", "imba"]
      });
    default:
      return state;
  }
}
