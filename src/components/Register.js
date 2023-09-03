import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';

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
        <div className='form-now'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor='email' className='form-label'>
            e-mail
          </label>
          <input
            type='text'
            className='form-input'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            type='password'
            className='form-input'
            name='email'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block' onClick={onSubmit}>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
