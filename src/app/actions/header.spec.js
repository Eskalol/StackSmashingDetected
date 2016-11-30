import * as types from '../constants/HeaderTypes';
import * as actions from './header';

describe('Header actions', () => {
  it('should create CHANGE_HEADER_TEXT action', () => {
    expect(actions.changeText('Cool')).toEqual({
      type: types.CHANGE_HEADER_TEXT,
      text: 'Cool'
    });
  });
  it('should create ANALYSIS_LIST_URL action', () => {
    expect(actions.analysisListUrl('imba', true)).toEqual({
      type: types.ANALYSIS_LIST_URL,
      text: 'imba',
      analysis: true
    });
  });
  it('should create ANALYSIS_BUTTON action', () => {
    expect(actions.analysisButton(false)).toEqual({
      type: types.ANALYSIS_BUTTON,
      bool: false
    });
  });
});
