import React from 'react';

const SearchScreen = () => {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Search</h2>
      <input
        type='text'
        placeholder='Search users...'
        className='w-full p-2 border rounded'
      />
    </div>
  );
};

export default SearchScreen;
