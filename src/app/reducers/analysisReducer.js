import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/AnalysisTypes';

const initialState = {
  loading: false,
  items: [],
  itemCnt: 0,
  namespaceCnt: 0
};

export default function analysisReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_KEYS:
      return Object.assign({}, state, {
        items: state.items.map(n =>
            n === action.namespace ?
              [n, action.keyCnt] :
              n
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
      return Object.assign({}, state, {
        itemCnt: action.itemCnt,
        items: action.namespaces.map(namespace => {
          return namespace;
        })
      });

    default:
      return state;
  }
}
