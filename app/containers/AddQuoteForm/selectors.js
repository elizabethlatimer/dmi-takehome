import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addQuoteForm state domain
 */

const selectAddQuoteFormDomain = state => state.addQuoteForm || initialState;

/**
 * Other specific selectors
 */

const makeSelectTempQuote = () =>
  createSelector(
    selectAddQuoteFormDomain,
    substate => substate.newQuote,
  );

/**
 * Default selector used by AddQuoteForm
 */

const makeSelectAddQuoteForm = () =>
  createSelector(
    selectAddQuoteFormDomain,
    substate => substate,
  );

export default makeSelectAddQuoteForm;
export { selectAddQuoteFormDomain, makeSelectTempQuote };
