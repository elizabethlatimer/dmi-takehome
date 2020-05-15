import axios from 'axios';
import { takeLatest, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { SEND_QUOTE } from '../App/constants';
import { addNewQuote } from '../App/actions';
import { clearTempQuote } from './actions';
import { makeSelectTempQuote } from './selectors';

// Individual exports for testing
export default function* newQuote() {
  yield takeLatest(SEND_QUOTE, updateQuotes);
}

export function* updateQuotes() {
  const requestURL = 'http://localhost:3000/api/add';
  const quote = yield select(makeSelectTempQuote());

  try {
    const id = yield postRequest(requestURL, quote);
    yield put(addNewQuote({ quote, id }));
    yield put(clearTempQuote());
    yield put(push('/'));
  } catch (err) {
    throw new Error(`Something went wrong: ${err}`);
  }
}

async function postRequest(url, quote) {
  try {
    const resp = await axios.post(url, { quote });
    return resp.data.id;
  } catch (err) {
    throw new Error('An error occurred.');
  }
}
