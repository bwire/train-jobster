import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import FormRowSelect from '../../components/FormRowSelect';
import {
  clearValues,
  handleChange,
  createJob,
} from '../../features/job/jobSlice';

const AddJob = () => {
  const {
    position,
    company,
    jobLocation,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    isLoading,
    isEditing,
  } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, [dispatch, isEditing, user]);

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            labelText='status'
            name='status'
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            labelText='job type'
            name='jobType'
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
          />
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn btn-block clear-btn'
            onClick={() => dispatch(clearValues())}
          >
            clear
          </button>
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
