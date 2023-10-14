import React from 'react';
import { toast } from 'react-toastify';
import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';

const AddJob = () => {
  const { position, company, jobLocation, isLoading, isEditing } = useSelector(
    ({ job }) => job,
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block clear-btn"
            onClick={() => console.log('clear values')}
          >
            clear
          </button>
          <button
            type="submit"
            className="btn btn-block submit-btn"
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
