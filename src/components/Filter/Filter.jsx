import PropTypes from 'prop-types';
import React from 'react';
import { FormField, Field } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <FormField>
        Find contacts by name
        <Field type="text" value={value} onChange={onChange} />
      </FormField>
    </>
  );
};

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
