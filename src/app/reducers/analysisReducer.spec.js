import * as types from '../constants/AnalysisTypes';
import analysisReducer from './analysisReducer';

describe('analysis reducer', () => {
  it('should handle initial state', () => {
    expect(analysisReducer(undefined, {})).toEqual({
      loading: false,
      items: [],
      itemCnt: 0,
      namespaceCnt: 0
    });
  });
  it('should handle request keys', () => {
    expect(analysisReducer(undefined, {
      type: types.REQUEST_KEYS
    })).toEqual({
      loading: true,
      items: [],
      itemCnt: 0,
      namespaceCnt: 0
    });
  });
  it('should handle request namespaces', () => {
    expect(analysisReducer(undefined, {
      type: types.REQUEST_NAMESPACES
    })).toEqual({
      loading: true,
      items: [],
      itemCnt: 0,
      namespaceCnt: 0
    });
  });
  it('should handle receive namespaces', () => {
    expect(analysisReducer(undefined, {
      type: types.RECEIVE_NAMESPACES,
      itemCnt: 3,
      namespaces: ['lol', 'imba', 'cool']
    })).toEqual({
      loading: false,
      items: ['lol', 'imba', 'cool'],
      itemCnt: 3,
      namespaceCnt: 0
    });
  });
  it('should handle receive keys', () => {
    expect(analysisReducer({
      loading: true,
      items: ['lol', 'imba', 'cool'],
      itemCnt: 3,
      namespaceCnt: 0
    }, {
      type: types.RECEIVE_KEYS,
      namespace: 'imba',
      keyCnt: 10
    })).toEqual({
      items: ['lol', ['imba', 10], 'cool'],
      loading: true,
      itemCnt: 2,
      namespaceCnt: 1
    });
  });
});
