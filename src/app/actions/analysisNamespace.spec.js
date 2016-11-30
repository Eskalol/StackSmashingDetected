import {REQUEST_KEYS,
        RECEIVE_KEYS,
        RECEIVE_METADATA} from '../constants/AnalysisNamespaceTypes';
import * as actions from './analysisNamespace';

describe('Analysis namespace actions', () => {
  it('should create REQUEST_KEYS action', () => {
    expect(actions.requestKeys()).toEqual({
      type: REQUEST_KEYS
    });
  });
  it('should create RECEIVE_KEYS action', () => {
    expect(actions.receiveKeys(['key1', 'key2', 'key3'])).toEqual({
      type: RECEIVE_KEYS,
      keys: ['key1', 'key2', 'key3']
    });
  });
  it('should create RECEIVE_METADATA action', () => {
    expect(actions.receiveMetaData({
      created: 'lol',
      lastUpdated: 'hei'
    }, 'key')).toEqual({
      type: RECEIVE_METADATA,
      key: 'key',
      created: 'lol',
      lastUpdated: 'hei'
    });
  });
});
