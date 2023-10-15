import React from 'react';

const FormRowSelect = ({ labelText, name, value, list, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor='status' className='form-label'>
        {labelText}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((val, idx) => (
          <option key={idx} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
