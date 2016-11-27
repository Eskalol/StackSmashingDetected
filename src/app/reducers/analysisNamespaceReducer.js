import {REQUEST_KEYS,
        RECEIVE_KEYS,
        RECEIVE_METADATA} from '../constants/AnalysisNamespaceTypes';

const initialState = {
  items: [],
  loading: false,
  keyCnt: 0
};

export default function analysisNamespace(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_KEYS:
      return Object.assign({}, state, {
        items: action.keys.map(key => ({
          key
        })),
        keyCnt: action.keys.length
      });

    case RECEIVE_METADATA:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.key === action.key ?
            Object.assign({}, key, {created: action.created, lastUpdated: action.lastUpdated}) :
            key
          ),
        keyCnt: state.keyCnt - 1,
        loading: state.keyCnt - 1 !== 0
      });

    default:
      return state;
  }
}
