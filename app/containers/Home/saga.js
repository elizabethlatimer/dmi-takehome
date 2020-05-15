import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { quotesLoaded, quoteLoadingError } from '../App/actions';
import { LOAD_QUOTES } from '../App/constants';

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
