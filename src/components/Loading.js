import React from 'react';
import white_spinner from '../assets/images/white_spinner.gif';
function Loading() {
  return (
    <div className='h-fit w-screen flex justify-center items-center bg-black pt-48 text-white text-4xl'>
      <img src={white_spinner} className='h-20 w-20' />
    </div>
  );
}

export default Loading;
