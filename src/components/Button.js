import React from 'react';

function Button({ children }) {
  return (
    <div className='text-purple-50 absolute right-6 border tracking-widest border-white cursor-pointer px-4 py-2 rounded hover:bg-white hover:text-black'>
      {children}
    </div>
  );
}

export default Button;
