import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the home state domain
 */

const selectHomeDomain = state => state.home || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.error,
  );

const makeSelectQuotes = () =>
  createSelector(
    selectHomeDomain,
    substate => substate.quotes,
  );

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectError,
  makeSelectLoading,
  makeSelectQuotes,
};
