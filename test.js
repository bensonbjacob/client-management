import React from 'react';
import { useReducer } from 'react';
import { BiBrush } from 'react-icons/bi';
import Success from './Success';
import Error from './Error';
import { getUser, getUsers, updateUser } from '../lib/helper';
import { useQueryClient, useQuery, useMutation } from 'react-query';

const UpdateClient = ({ formId, formData, setFormData }) => {

const queryClient = useQueryClient();
const { isLoading, isError, data, error } = useQuery(
['users', formId],
() => getUser(formId)
);

const UpdateMutation = useMutation(
(newData) => updateUser(formId, newData),
{
onSuccess: async (data) => {
queryClient.setQueryData('users', (old) => [data])
queryClient.prefetchQuery('users', getUsers);
},
}
);

if (isLoading) return

Loading...

;

if (isError) return

Error

;

const { name, avatar, phone, date, email, status } = data;

const [firstname, lastname] = name ? name.split(' ') : formData;

const handleSubmit = (e) => {

e.preventDefault();

if (Object.keys(formData).length == 0)

return console.log('Need form data.');

console.log(formData);

};

return (

Active

Inactive

Update{' '}

); };

export default UpdateClient;
