import React, { Children } from 'react';
import './styles.css';
function Cards({ img }) {
  return (
    // <div className='check cursor-pointer relative w-48 h-36 m-4 md:w-60 md:h-40 md:m-4 md:mx-6 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
    <div className='check cursor-pointer relative overflow-hidden w-48 h-33 m-4 md:w-[280px] md:h-40 md:m-4 rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
      <img className='images' src={img} />
    </div>
    // </div>
  );
}

export default Cards;
