import React from 'react';

const FormRow = ({ type, name, value, onChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText}
      </label>
      <input
        type={type}
        className='form-input'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormRow;
