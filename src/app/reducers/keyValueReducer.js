import * as types from '../constants/keyValueTypes';

const initialState = {
  items: [],
  loading: false,
  add: false,
  keyCnt: 0,
  error: false,
  message: ""
};

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_KEYS:
      return Object.assign({}, state, {
        loading: true
      });

    case types.RECEIVE_KEYS:
      return Object.assign({}, state, {
        items: action.keys.map((key, id) => ({
          key,
          id,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false,
          new: false
        })),
        keyCnt: action.keys.length
      });

    case types.RECEIVE_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
            Object.assign({}, key, {
              value: JSON.stringify(action.value),
              loading: false,
              overflow: action.value.length > 100,
              showValue: action.value.length <= 100
            }) :
            key
          ),
        keyCnt: state.keyCnt === 0 ? 0 : state.keyCnt - 1,
        loading: state.keyCnt === 0 ? false : state.keyCnt - 1 !== 0
      });

    case types.RECEIVE_METADATA:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {metadata: action.metadata, metadataShow: true}) :
          key
        )
      });

    case types.TOGGLE_ADD:
      return Object.assign({}, state, {
        add: !state.add
      });

    case types.ADD_KEY:
      return Object.assign({}, state, {
        items: [...state, {
          key: action.key,
          id: action.id,
          edit: false,
          metadata: {},
          value: {},
          loading: false
        }]
      });

    case types.TOGGLE_EDIT:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {edit: !key.edit}) :
          key
        )
      });

    case types.DELETE_KEY_VALUE:
      return Object.assign({}, state, {
        items: state.items.filter(key =>
          key.id !== action.id
        )
      });

    case types.ADD_KEY_VALUE:
      return Object.assign({}, state, {
        error: false,
        message: "",
        items: [{
          key: action.key,
          id: state.items.length,
          edit: false,
          metadata: {},
          value: action.value,
          loading: false,
          new: true
        }, ...state.items]
      });

    case types.TOGGLE_OVERFLOW:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {overflow: !key.overflow}) :
          key
        )
      });

    case types.TOGGLE_SHOW_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {showValue: !key.showValue}) :
          key
        )
      });

    case types.TOGGLE_METADATA:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {metadataShow: !key.metadataShow}) :
          key
        )
      });

    case types.KEY_VALUE_ERROR:
      return Object.assign({}, state, {
        error: true,
        message: action.msg
      });

    default:
      return state;
  }
}
