import * as types from '../constants/keyValueTypes';

const initialState = {
  items: [],
  loading: false,
  add: false,
  keyCnt: 0
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
          metaData: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metaDataShow: false
        })),
        keyCnt: action.keys.length
      });

    case types.RECEIVE_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
            Object.assign({}, key, {value: JSON.stringify(action.value), loading: false}) :
            key
          ),
        keyCnt: state.keyCnt - 1,
        loading: state.keyCnt - 1 !== 0
      });

    case types.RECEIVE_METADATA:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {metaData: action.metaData, metaDataShow: true}) :
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
          metaData: {},
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
        items: [...state.items, {
          key: action.key,
          id: state.items.length,
          edit: false,
          metaData: {},
          value: action.value,
          loading: false
        }]
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
          Object.assign({}, key, {metaDataShow: !key.metaDataShow}) :
          key
        )
      });

    case types.REQUEST_VALUE:
      return state;

    default:
      return state;
  }
}
