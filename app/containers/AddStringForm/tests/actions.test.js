import { postQuote } from '../actions';
import { POST_QUOTE } from '../constants';

describe('AddStringForm actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: POST_QUOTE,
      };
      expect(postQuote()).toEqual(expected);
    });
  });
});
