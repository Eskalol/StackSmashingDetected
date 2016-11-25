import {RECEIVE_NAMESPACES} from '../constants/namespaceTypes';

const initialState = {
  items: []
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_NAMESPACES:
      // console.log("Got namespaces!");
      // console.log(state);
      // console.log(action);
      return Object.assign({}, state, {
        items: action.namespaces
      });
    default:
      return state;
  }
}
