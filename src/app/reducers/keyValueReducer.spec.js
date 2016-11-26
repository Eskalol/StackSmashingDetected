import keyValues from './keyValueReducer';
import * as types from '../constants/keyValueTypes';

describe('keyvalue reducer', () => {
  it('should handle inital state', () => {
    expect(keyValues(undefined, {
      type: "UNDEFINED_ACTION"
    })).toEqual({
      items: [],
      loading: false,
      add: false,
      keyCnt: 0
    });
  });
  it('should handle REQUEST_KEYS correctly', () => {
    expect(keyValues({}, {
      type: types.REQUEST_KEYS
    })).toEqual({
      loading: true
    });
  });
  it('should handle RECEIVE_KEYS correctly', () => {
    expect(keyValues({}, {
      type: types.RECEIVE_KEYS,
      keys: [
        "KEY1",
        "KEY2"
      ]
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ],
      keyCnt: 2
    });
  });
  it('should handle RECEIVE_VALUE correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ],
      keyCnt: 2
    }, {
      type: types.RECEIVE_VALUE,
      id: 1,
      value: "Cheese"
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: false,
          metadata: {},
          value: JSON.stringify("Cheese"),
          loading: false,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ],
      keyCnt: 1,
      loading: true
    });
  });
  it('should handle RECEIVE_METADATA correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ],
      keyCnt: 2
    },
      {
        type: types.RECEIVE_METADATA,
        id: 0,
        metadata: "Cheese"
      })).toEqual({
        items: [
          {
            key: "KEY1",
            id: 0,
            edit: false,
            metadata: "Cheese",
            value: {},
            loading: true,
            overflow: false,
            showValue: true,
            metadataShow: true
          },
          {
            key: "KEY2",
            id: 1,
            edit: false,
            metadata: {},
            value: {},
            loading: true,
            overflow: false,
            showValue: true,
            metadataShow: false
          }
        ],
        keyCnt: 2
      });
  });
  it('should handle TOGGLE_ADD correctly', () => {
    expect(keyValues({
      add: false
    }, {
      type: types.TOGGLE_ADD
    })).toEqual({
      add: true
    });
  });
  it('should handle ADD_KEY correctly', () => {
    expect(keyValues({}, {
      type: types.ADD_KEY,
      key: "Test key",
      id: 0
    })).toEqual({
      items: [
        {
          key: "Test key",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: false
        }
      ]
    });
  });
  it('should handle TOGGLE_EDIT correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    }, {
      type: types.TOGGLE_EDIT,
      id: 1,
      edit: false
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        },
        {
          key: "KEY2",
          id: 1,
          edit: true,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    });
  });
  it('should handle DELETE_KEY_VALUE correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    }, {
      type: types.DELETE_KEY_VALUE,
      id: 0,
      edit: false
    })).toEqual({
      items: []
    });
  });
  it('should handle ADD_KEY_VALUE correctly', () => {
    expect(keyValues({
      items: []
    }, {
      type: types.ADD_KEY_VALUE,
      key: "Test key",
      value: "Test value"
    })).toEqual({
      items: [
        {
          key: "Test key",
          id: 0,
          edit: false,
          metadata: {},
          value: "Test value",
          loading: false
        }
      ]
    });
  });
  it('should handle TOGGLE_OVERFLOW correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    }, {
      type: types.TOGGLE_OVERFLOW,
      id: 0,
      overflow: false
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: true,
          showValue: true,
          metadataShow: false
        }
      ]
    });
  });
  it('should handle TOGGLE_SHOW_VALUE correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    }, {
      type: types.TOGGLE_SHOW_VALUE,
      id: 0,
      showValue: true
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: false,
          metadataShow: false
        }
      ]
    });
  });
  it('should handle TOGGLE_METADATA correctly', () => {
    expect(keyValues({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: false
        }
      ]
    }, {
      type: types.TOGGLE_METADATA,
      id: 0,
      metadataShow: false
    })).toEqual({
      items: [
        {
          key: "KEY1",
          id: 0,
          edit: false,
          metadata: {},
          value: {},
          loading: true,
          overflow: false,
          showValue: true,
          metadataShow: true
        }
      ]
    });
  });
});
