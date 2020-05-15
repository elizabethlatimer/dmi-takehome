/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  LOAD_QUOTES,
  LOAD_QUOTES_SUCCESS,
  LOAD_QUOTES_ERROR,
  ADD_NEW_QUOTE,
} from './constants';

export const initialState = {
  loading: true,
  errors: false,
  quotes: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_QUOTES:
        draft.loading = true;
        draft.errors = false;
        break;

      case LOAD_QUOTES_SUCCESS:
        draft.quotes = action.quotes;
        draft.loading = false;
        break;

      case LOAD_QUOTES_ERROR:
        draft.errors = action.error;
        draft.loading = false;
        break;

      case ADD_NEW_QUOTE:
        draft.quotes = [action.quote, ...state.quotes];
        break;
    }
  });

export default appReducer;
