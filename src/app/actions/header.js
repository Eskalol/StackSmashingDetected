import {CHANGE_HEADER_TEXT} from '../constants/HeaderTypes';

export function changeText(text) {
  return {
    type: CHANGE_HEADER_TEXT,
    text
  };
}
