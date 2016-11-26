import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/AnalysisTypes';

const initialState = {
  loading: false,
  items: [],
  itemCnt: 0,
  namespaceCnt: 0
};

export default function namespaces(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return state;

    case RECEIVE_KEYS:
      return Object.assign({}, state, {
        items: state.items.map(() =>
          // n.namespace === action.namespace ?
            // Object.assign({}, n, {keyCnt: action.keyCnt}) :
            1
          ),
        namespaceCnt: state.namespaceCnt + 1,
        itemCnt: state.itemCnt - 1,
        loading: state.itemCnt - 1 !== 0
      });

    case REQUEST_NAMESPACES:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_NAMESPACES:
      console.log("Received namespaces");
      return Object.assign({}, state, {
        itemCnt: action.itemCnt,
        items: action.namespaces.map(namespace => {
          console.log(namespace);
          return namespace;
        }),
        loading: false
      });

    default:
      return state;
  }
}
