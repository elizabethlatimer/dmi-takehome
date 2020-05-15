/*
 *
 * AddQuoteForm actions
 *
 */

import { TEMP_QUOTE, CLEAR_TEMP_QUOTE } from './constants';

export function setTempQuote(quote) {
  return {
    type: TEMP_QUOTE,
    newQuote: quote,
  };
}

export function clearTempQuote() {
  return {
    type: CLEAR_TEMP_QUOTE,
  };
}
