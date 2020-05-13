/*
 *
 * AddStringForm actions
 *
 */

import { POST_QUOTE } from './constants';

export function postQuote() {
  return {
    type: POST_QUOTE,
  };
}
