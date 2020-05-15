/**
 * Test sagas
 */

import { takeLatest, put } from 'redux-saga/effects';
import quotesList, { getQuotes } from '../saga';

import { quotesLoaded, quoteLoadingError } from '../../App/actions';
import { LOAD_QUOTES } from '../../App/constants';

/* eslint-disable redux-saga/yield-effects */

describe('getQuotes Saga', () => {
  let getQuotesGenerator;

  beforeEach(() => {
    getQuotesGenerator = getQuotes();

    const callDescriptor = getQuotesGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the quotesLoaded action if it requests the data successfully', () => {
    const response = [
      {
        quote: 'First quote',
        id: 0,
      },
      {
        quote: 'Second quote',
        id: 1,
      },
    ];
    const putDescriptor = getQuotesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(quotesLoaded(response)));
  });

  it('should call the quoteLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getQuotesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(quoteLoadingError(response)));
  });
});

describe('quotesList Saga', () => {
  const quotesListSaga = quotesList();

  it('should start task to watch for LOAD_QUOTES action', () => {
    const takeLatestDescriptor = quotesListSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_QUOTES, getQuotes));
  });
});
