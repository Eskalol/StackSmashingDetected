import * as types from '../constants/AnalysisNamespaceTypes';
import analysisNamespace from './analysisNamespaceReducer';

describe('analysis namespace reducer', () => {
  it('should handle inital state', () => {
    expect(analysisNamespace(undefined, {})).toEqual({
      items: [],
      loading: false,
      keyCnt: 0
    });
  });
  it('should handle REQUEST_KEYS', () => {
    expect(analysisNamespace(undefined, {
      type: types.REQUEST_KEYS
    })).toEqual({
      items: [],
      loading: true,
      keyCnt: 0
    });
  });
  it('should handle RECEIVE_KEYS', () => {
    expect(analysisNamespace(undefined, {
      type: types.RECEIVE_KEYS,
      keys: ['imba', 'lol', 'cool']
    })).toEqual({
      items: [{
        key: 'imba'
      }, {
        key: 'lol'
      }, {
        key: 'cool'
      }],
      loading: false,
      keyCnt: 3
    });
  });
  it('should handle RECEIVE_METADATA', () => {
    expect(analysisNamespace({
      items: [{
        key: 'imba'
      }, {
        key: 'lol'
      }, {
        key: 'cool'
      }],
      loading: false,
      keyCnt: 3
    }, {
      type: types.RECEIVE_METADATA,
      key: 'lol',
      created: 'some-time',
      lastUpdated: 'some-cool-time'
    })).toEqual({
      items: [{
        key: 'imba'
      }, {
        key: 'lol',
        created: 'some-time',
        lastUpdated: 'some-cool-time'
      }, {
        key: 'cool'
      }],
      loading: true,
      keyCnt: 2
    });
  });
});
