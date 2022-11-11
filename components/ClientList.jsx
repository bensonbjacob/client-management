import React from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';

const ClientList = () => {
  const { isLoading, isError, data, error } = useQuery(
    'users',
    getUsers
  );
  if (isLoading) return <div>Client is Loading...</div>;
  if (isError) return <div>Received Error {error}</div>;

  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Name</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Email</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Phone Number</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Date Added</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-gray-200'>
        {data.map((obj, i) => (
          <Tr {...obj} key={i} />
        ))}
      </tbody>
    </table>
  );
};

function Tr({ id, name, avatar, email, phone, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction);
  };

  return (
    <tr className='bg-gray-50 text-center'>
      <td className='px-16 py-2 flex flex-row items-center'>
        <img
          className='h-8 w-8 rounded-full object-cover'
          src={avatar || '#'}
          alt=''
        />
        <span className='text-center ml-2 font-semibold'>
          {name || 'Unknown'}
        </span>
      </td>
      <td className='px-16 py-2'>
        <span>{email || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <span>{phone || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <span>{date || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <button className='cursor'>
          <span
            className={`${
              status == 'Active' ? 'bg-green-500' : 'bg-rose-500'
            } text=white px-5 py-1 rounded-full`}
          >
            {status}
          </span>
        </button>
      </td>
      <td className='px-16 py-2 flex justify-around gap-5'>
        <button className='cursor' onClick={onUpdate}>
          <BiEdit size={25} />
        </button>
        <button className='cursor'>
          <BiTrashAlt size={25} />
        </button>
      </td>
    </tr>
  );
}

export default ClientList;
