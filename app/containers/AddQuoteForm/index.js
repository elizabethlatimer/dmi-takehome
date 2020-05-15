/**
 *
 * AddQuoteForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Input from '../../components/FormInput';
import Form from '../../components/Form';
import Label from '../../components/Label';
import Button from '../../components/Button';

import { sendQuote } from '../App/actions';
import { setTempQuote } from './actions';
import reducer from './reducer';
import saga from './saga';

const INITIAL_FORM_STATE = { quote: '' };

export function AddQuoteForm({ handleSubmit, handleChangeQuote }) {
  useInjectSaga({ key: 'addQuoteForm', saga });
  useInjectReducer({ key: 'addQuoteForm', reducer });

  const [formState, setFormState] = useState(INITIAL_FORM_STATE);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormState({ ...formState, [name]: value });
    handleChangeQuote(value);
  }
  function submit(evt) {
    handleSubmit(evt);
    setFormState(INITIAL_FORM_STATE);
  }

  return (
    <div>
      <Form onSubmit={submit}>
        <Label htmlFor="quote">Add Your Quote</Label>
        <Input name="quote" value={formState.quote} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

AddQuoteForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChangeQuote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // addQuoteForm: makeSelectAddQuoteForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: evt => {
      evt.preventDefault();
      dispatch(sendQuote());
    },
    handleChangeQuote: val => {
      dispatch(setTempQuote(val));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddQuoteForm);
