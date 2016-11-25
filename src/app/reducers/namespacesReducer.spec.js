import namespaces from './namespacesReducer';
import * as types from '../constants/namespaceTypes';

describe('namespaces reducer', () => {
  it('should handle inital state', () => {
    expect(namespaces(undefined, {})).toEqual({
      isFetching: false,
      items: []
    });
  });
  it('should handle RECEIVE_NAMESPACES correctly', () => {
    expect(namespaces({}, {
      type: types.RECEIVE_NAMESPACES,
      namespaces: ['cool', 'lol', 'imba']

    })).toEqual({
      isFetching: false,
      items: ['cool', 'lol', 'imba']
    });
  });
  it('should handle REQUEST_NAMESPACES', () => {
    expect(namespaces({}, {
      type: types.REQUEST_NAMESPACES
    })).toEqual({isFetching: true});
  });
});
