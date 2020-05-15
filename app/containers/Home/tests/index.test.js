/**
 *
 * Tests for Home
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { Home, mapDispatchToProps } from '../index';
import { loadQuotes } from '../../App/actions';
import configureStore from '../../../configureStore';

const STRINGS = [
  { quote: 'Be yourself; everyone else is already taken.', id: 0 },
  { quote: 'This above all: to thine own self be true.', id: 1 },
  {
    quote: 'If you cannot do great things, do small things in a great way.',
    id: 2,
  },
  { quote: 'Strive not to be a success, but rather to be of value.', id: 3 },
  {
    quote: 'Do not let what you cannot do interfere with what you can do.',
    id: 4,
  },
];

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Home loading={false} errors={false} quotes={STRINGS} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the quotes on first render if quotes do not exist', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Home loading quotes={false} onGetQuotes={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onGetQuotes if there are quotes in props', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Home loading quotes={STRINGS} onGetQuotes={submitSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onGetQuotes', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onGetQuotes).toBeDefined();
      });

      it('should dispatch loadQuotes when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onGetQuotes();
        expect(dispatch).toHaveBeenCalledWith(loadQuotes());
      });
    });
  });
});
