/*
 *
 * Home actions
 *
 */

import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
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
