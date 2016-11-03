import {CHANGE_HEADER_TEXT} from '../constants/HeaderTypes';

const initialState = {
  ht: "DHIS"
};

export default function header(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_TEXT:
      return {
        ht: action.text
      };

    default:
      return state;
  }
}
