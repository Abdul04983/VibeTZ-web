import React from 'react';

const ProfileScreen = () => {
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'>My Profile</h2>
      <div className='bg-white p-4 shadow rounded'>
        <p className='text-gray-700'>Username: @vibetzer</p>
        <p className='text-gray-700'>Bio: Vibing across the globe.</p>
      </div>
    </div>
  );
};

export default ProfileScreen;
