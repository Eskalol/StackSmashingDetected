import {REQUEST_KEYS,
        RECEIVE_KEYS,
        RECEIVE_VALUE,
        RECEIVE_METADATA,
        REQUEST_VALUE,
        TOGGLE_ADD,
        ADD_KEY,
        TOGGLE_EDIT,
        DELETE_KEY_VALUE,
        ADD_KEY_VALUE,
        TOGGLE_OVERFLOW,
        TOGGLE_SHOW_VALUE} from '../constants/keyValueTypes';

const initialState = {
  items: [],
  loading: false,
  add: false,
  keyCnt: 0
};

/*
 TODO: fix unique identifier for key
*/

export default function keyValues(state = initialState, action) {
  switch (action.type) {
    case REQUEST_KEYS:
      return Object.assign({}, state, {
        loading: true
      });

    case RECEIVE_KEYS:
      return Object.assign({}, state, {
        items: action.keys.map((key, id) => ({
          key,
          id,
          edit: false,
          metaData: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true
        })),
        keyCnt: action.keys.length
      });

    case RECEIVE_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
            Object.assign({}, key, {value: JSON.stringify(action.value), loading: false}) :
            key
          ),
        keyCnt: state.keyCnt - 1,
        loading: state.keyCnt - 1 !== 0
      });

    case RECEIVE_METADATA:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {metaData: action.metaData}) :
          key
        )
      });

    case TOGGLE_ADD:
      return Object.assign({}, state, {
        add: !state.add
      });

    case ADD_KEY:
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

    case TOGGLE_EDIT:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {edit: !key.edit}) :
          key
        )
      });

    case DELETE_KEY_VALUE:
      return Object.assign({}, state, {
        items: state.items.filter(key =>
          key.id !== action.id
        )
      });

    case ADD_KEY_VALUE:
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

    case TOGGLE_OVERFLOW:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {overflow: !key.overflow}) :
          key
        )
      });

    case TOGGLE_SHOW_VALUE:
      return Object.assign({}, state, {
        items: state.items.map(key =>
          key.id === action.id ?
          Object.assign({}, key, {showValue: !key.showValue}) :
          key
        )
      });

    case REQUEST_VALUE:
      return state;

    default:
      return state;
  }
}
