import {REQUEST_NAMESPACES, RECEIVE_NAMESPACES} from '../constants/namespaceTypes';
import * as actions from './namespace';

describe('Namespace actions', () => {
  it('should create REQUEST_NAMESPACES action', () => {
    expect(actions.requestNamespaces()).toEqual({
      type: REQUEST_NAMESPACES
    });
  });
  it('should create RECEIVE_NAMESPACES action', () => {
    expect(actions.receiveNamespaces('some lol')).toEqual({
      type: RECEIVE_NAMESPACES,
      namespaces: 'some lol'
    });
  });
});
