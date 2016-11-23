import {CHANGE_HEADER_TEXT, ANALYSIS_LIST_URL, ANALYSIS_BUTTON} from '../constants/HeaderTypes';

const initialState = {
  ht: "DHIS",
  analysisUrl: "/datastore-analysis",
  analysis: false,
  analysisButton: false
};

export default function header(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_TEXT:
      return Object.assign({}, state, {
        ht: action.text
      });

    case ANALYSIS_LIST_URL:
      return Object.assign({}, state, {
        analysisUrl: action.text,
        analysis: action.analysis
      });

    case ANALYSIS_BUTTON:
      return Object.assign({}, state, {
        analysisButton: action.bool
      });
    default:
      return state;
  }
}
