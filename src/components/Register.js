import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form action='' className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <FormRow
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          labelText='name'
        />
        <FormRow
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          labelText='e-mail'
        />
        <FormRow
          type='password'
          name='password'
          value={values.email}
          onChange={handleChange}
          labelText='password'
        />
        <button type='submit' className='btn btn-block' onClick={onSubmit}>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
