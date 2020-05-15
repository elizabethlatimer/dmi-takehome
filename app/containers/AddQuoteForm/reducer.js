/*
 *
 * AddQuoteForm reducer
 *
 */
import produce from 'immer';
import { TEMP_QUOTE, CLEAR_TEMP_QUOTE } from './constants';

export const initialState = { newQuote: false };

/* eslint-disable default-case, no-param-reassign */
const addQuoteFormReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TEMP_QUOTE:
        draft.newQuote = action.newQuote;
        break;

      case CLEAR_TEMP_QUOTE:
        draft.newQuote = false;
        break;
    }
  });

export default addQuoteFormReducer;
