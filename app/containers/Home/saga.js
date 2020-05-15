/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { quotesLoaded, quoteLoadingError } from './actions';
import { LOAD_QUOTES } from './constants';

/**
 * Github repos request/response handler
 */
export function* getQuotes() {
  const requestURL = `http://localhost:3000/api`;

  try {
    const quotes = yield call(request, requestURL);
    yield put(quotesLoaded(quotes));
  } catch (err) {
    yield put(quoteLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* quotesList() {
  // Watches for LOAD_REPOS actions and calls getQuotes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_QUOTES, getQuotes);
}

async function request(url) {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    throw new Error('An error occurred.');
  }
}
