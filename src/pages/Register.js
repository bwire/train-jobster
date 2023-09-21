import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

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
    if (isMember) {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(registerUser({ name, email, password }));
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
