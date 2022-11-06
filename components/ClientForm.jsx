import React from 'react';
import AddClient from './AddClient';
import UpdateClient from './UpdateClient';

const ClientForm = () => {
  const flag = true;

  return (
    <div className='container mx-auto py-5'>
      {flag ? <AddClient /> : <UpdateClient />}
    </div>
  );
};

export default ClientForm;
