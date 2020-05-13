/**
 *
 * AddStringForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAddStringForm from './selectors';
import reducer from './reducer';
import messages from './messages';

export function AddStringForm() {
  useInjectReducer({ key: 'addStringForm', reducer });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddStringForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addStringForm: makeSelectAddStringForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddStringForm);
