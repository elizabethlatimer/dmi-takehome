/*
 *
 * Home actions
 *
 */

import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
  ADD_NEW_QUOTE,
  SEND_QUOTE,
} from './constants';

export function loadQuotes() {
  return {
    type: LOAD_QUOTES,
  };
}

export function quotesLoaded(quotes) {
  return {
    type: LOAD_QUOTES_SUCCESS,
    quotes,
  };
}

export function quoteLoadingError(error) {
  return {
    type: LOAD_QUOTES_ERROR,
    error,
  };
}

export function sendQuote() {
  return {
    type: SEND_QUOTE,
  };
}

export function addNewQuote(quote) {
  return {
    type: ADD_NEW_QUOTE,
    quote,
  };
}
