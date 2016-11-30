import {REQUEST_KEYS, RECEIVE_KEYS, REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/AnalysisTypes';
import * as actions from './analysis';

describe('Analysis actions', () => {
  it('should create REQUEST_KEYS action', () => {
    expect(actions.requestKeys()).toEqual({
      type: REQUEST_KEYS
    });
  });
  it('should create RECEIVE_KEYS action', () => {
    expect(actions.receiveKeys(['cool', 'lol'], 'cool')).toEqual({
      type: RECEIVE_KEYS,
      keyCnt: 2,
      namespace: 'cool'
    });
  });
  it('should create RECEIVE_NAMESPACES', () => {
    expect(actions.receiveNamespaces(['imba', 'lol', 'cool'])).toEqual({
      type: RECEIVE_NAMESPACES,
      itemCnt: 3,
      namespaces: ['imba', 'lol', 'cool']
    });
  });
  it('should create REQUEST_NAMESPACES action', () => {
    expect(actions.requestNamespaces()).toEqual({
      type: REQUEST_NAMESPACES
    });
  });
});
