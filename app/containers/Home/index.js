/**
 *
 * Home
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectQuotes,
} from '../App/selectors';
import { loadQuotes } from '../App/actions';
import saga from './saga';

import Blockquote from '../../components/Blockquote';
// import messages from './messages';

export function Home({ loading, errors, quotes, onGetQuotes }) {
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    if (!quotes) {
      onGetQuotes();
    }
  }, []);

  return (
    <div>
      {errors ? <p>Oops, something went wrong.</p> : ''}
      {loading ? (
        <div>Loading...</div>
      ) : (
        quotes.map(quote => (
          <Blockquote key={quote.id}>{quote.quote}</Blockquote>
        ))
      )}
    </div>
  );
}

Home.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  quotes: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onGetQuotes: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  quotes: makeSelectQuotes(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetQuotes: () => dispatch(loadQuotes()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
