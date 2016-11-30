import * as types from '../constants/keyValueTypes';
import * as actions from './keyValue';

describe('keyValue Actions', () => {
  it('should create REQUEST_KEYS action', () => {
    expect(actions.requestKeys()).toEqual({
      type: types.REQUEST_KEYS
    });
  });
  it('should create RECEIVE_KEYS action', () => {
    expect(actions.receiveKeys(['lol', 'lol1', 'lol2'])).toEqual({
      type: types.RECEIVE_KEYS,
      keys: ['lol', 'lol1', 'lol2']
    });
  });
  it('should create RECEIVE_METADATA action', () => {
    expect(actions.receiveMetadata('some data', 10)).toEqual({
      type: types.RECEIVE_METADATA,
      metadata: 'some data',
      id: 10
    });
  });
  it('should create RECEIVE_VALUE action', () => {
    expect(actions.receiveValue('lol', 15)).toEqual({
      type: types.RECEIVE_VALUE,
      value: 'lol',
      id: 15
    });
  });
  it('should create TOGGLE_ADD action', () => {
    expect(actions.handleToggleAdd()).toEqual({
      type: types.TOGGLE_ADD
    });
  });
  it('should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit(2)).toEqual({
      type: types.TOGGLE_EDIT,
      id: 2
    });
  });
  it('should create DELETE_KEY_VALUE action', () => {
    expect(actions.deleteKeyValue(55)).toEqual({
      type: types.DELETE_KEY_VALUE,
      id: 55
    });
  });
  it('should create TOGGLE_OVERFLOW action', () => {
    expect(actions.toggleOverflow(4)).toEqual({
      type: types.TOGGLE_OVERFLOW,
      id: 4
    });
  });
  it('should create TOGGLE_SHOW_VALUE action', () => {
    expect(actions.toggleShowValue(70)).toEqual({
      type: types.TOGGLE_SHOW_VALUE,
      id: 70
    });
  });
  it('should create TOGGLE_METADATA action', () => {
    expect(actions.toggleMetadata(7)).toEqual({
      type: types.TOGGLE_METADATA,
      id: 7
    });
  });
  it('should create KEY_VALUE_ERROR action', () => {
    expect(actions.keyValueError('noob')).toEqual({
      type: types.KEY_VALUE_ERROR,
      msg: 'noob'
    });
  });
});
