/*
 *
 * AddStringForm reducer
 *
 */
import produce from 'immer';
import { POST_QUOTE } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const addStringFormReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case POST_QUOTE:
        break;
    }
  });

export default addStringFormReducer;
