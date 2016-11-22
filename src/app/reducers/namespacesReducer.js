import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

const initialState = {
  isFetching: false,
  items: []
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NAMESPACES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_NAMESPACES:
      console.log("SUper cool");
      console.log(state);
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.namespaces
      });
    default:
      return state;
  }
}
