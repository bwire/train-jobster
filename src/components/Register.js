import React, { useState } from 'react';
import { toast } from 'react-toastify';
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

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please, fill out all fields');
    }
  };

  return (
    <Wrapper className='full-page'>
      <form action='' className='form' onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isMember ? 'Login' : 'Register'} </h3>
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            labelText='name'
          />
        )}
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
          value={values.password}
          onChange={handleChange}
          labelText='password'
        />
        <button type='submit' className='btn btn-block' onClick={onSubmit}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
