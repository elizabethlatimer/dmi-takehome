import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    substate => substate.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    substate => substate.error,
  );

const makeSelectQuotes = () =>
  createSelector(
    selectGlobal,
    substate => substate.quotes,
  );

export {
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
  makeSelectQuotes,
};
