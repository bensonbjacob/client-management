import React from 'react';
import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Success from './Success';
import Error from './Error';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateClient = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log('Need form data.');
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Success message={'Client Added'} />;

  return (
    <form
      className='grid lg:grid-cols-2 w-4/6 gap-4'
      onSubmit={handleSubmit}
    >
      <div className='input-type'>
        <input
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          type='text'
          onChange={setFormData}
          name='firstname'
          placeholder='First Name'
        />
      </div>
      <div className='input-type'>
        <input
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          type='text'
          onChange={setFormData}
          name='lastname'
          placeholder='Last Name'
        />
      </div>
      <div className='input-type'>
        <input
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          type='text'
          onChange={setFormData}
          name='email'
          placeholder='Email'
        />
      </div>
      <div className='input-type'>
        <input
          className='border w-full px-5 py-3 focus:outline-none rounded-md'
          type='text'
          onChange={setFormData}
          name='phone'
          placeholder='Phone Number'
        />
      </div>
      <div className='input-type'>
        <input
          className='border px-5 py-3 focus:outline-none rounded-md'
          type='date'
          onChange={setFormData}
          name='date'
        />
      </div>
      <div className='flex gap-10 items-center'>
        <div className='form-check'>
          <input
            type='radio'
            onChange={setFormData}
            value='Active'
            id='radioDefault1'
            name='status'
            className='form-check-input appearance-none rounded-full h-4 w-5 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label
            className='inline-block text-gray-800'
            htmlFor='radioDefault1'
          >
            Active
          </label>
        </div>
        <div className='form-check'>
          <input
            type='radio'
            onChange={setFormData}
            value='Inactive'
            id='radioDefault2'
            name='status'
            className='form-check-input appearance-none rounded-full h-4 w-5 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label
            className='inline-block text-gray-800'
            htmlFor='radioDefault2'
          >
            Inactive
          </label>
        </div>
      </div>
      <button className='flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
        Update{' '}
        <span className='px-1'>
          <BiBrush size={24} />
        </span>
      </button>
    </form>
  );
};

export default UpdateClient;
