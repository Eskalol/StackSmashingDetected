import {CHANGE_HEADER_TEXT, ANALYSIS_LIST_URL, ANALYSIS_BUTTON} from '../constants/HeaderTypes';

export function changeText(text) {
  return {
    type: CHANGE_HEADER_TEXT,
    text
  };
}

export function analysisListUrl(text, analysis) {
  return {
    type: ANALYSIS_LIST_URL,
    text,
    analysis
  };
}

export function analysisButton(bool = true) {
  return {
    type: ANALYSIS_BUTTON,
    bool
  };
}
