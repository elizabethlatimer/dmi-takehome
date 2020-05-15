import { setTempQuote, clearTempQuote } from '../actions';
import { TEMP_QUOTE, CLEAR_TEMP_QUOTE } from '../constants';

describe('AddQuoteForm actions', () => {
  describe('Set a temp quote', () => {
    it('has a type of TEMP_QUOTE', () => {
      const expected = {
        type: TEMP_QUOTE,
      };
      expect(setTempQuote()).toEqual(expected);
    });
  });

  describe('Clear a temp quote', () => {
    it('has a type of CLEAR_TEMP_QUOTE', () => {
      const expected = {
        type: CLEAR_TEMP_QUOTE,
      };
      expect(clearTempQuote()).toEqual(expected);
    });
  });
});
