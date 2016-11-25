import header from './headerReducer';
import * as types from '../constants/HeaderTypes';

describe('header reducer', () => {
  it('should handle initalState', () => {
    expect(header(undefined, {})).toEqual({
      ht: "DHIS",
      analysisUrl: "/datastore-analysis",
      analysis: false,
      analysisButton: false
    });
  });
  it('should handle CHANGE_HEADER_TEXT', () => {
    expect(header(undefined, {
      type: types.CHANGE_HEADER_TEXT,
      text: "COOL"
    })).toEqual({
      ht: "COOL",
      analysisUrl: "/datastore-analysis",
      analysis: false,
      analysisButton: false
    });
  });
  it('should handle ANALYSIS_LIST_URL', () => {
    expect(header(undefined, {
      type: types.ANALYSIS_LIST_URL,
      text: "/super-url",
      analysis: true
    })).toEqual({
      ht: "DHIS",
      analysisUrl: "/super-url",
      analysis: true,
      analysisButton: false
    });
  });
  it('should handle ANALYSIS_BUTTON', () => {
    expect(header(undefined, {
      type: types.ANALYSIS_BUTTON,
      bool: true
    })).toEqual({
      ht: "DHIS",
      analysisUrl: "/datastore-analysis",
      analysis: false,
      analysisButton: true
    });
  });
});
