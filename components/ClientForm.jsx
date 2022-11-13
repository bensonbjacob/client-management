import React from 'react';
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const ClientForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className='container mx-auto py-5'>
      {formId
        ? UpdateClient({ formId, formData, setFormData })
        : AddClient({ formData, setFormData })}
    </div>
  );
};

export default ClientForm;
