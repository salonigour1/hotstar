import React, { useEffect, useRef } from 'react';
import disney from '../assets/videos/disney.mp4';
import marvel from '../assets/videos/marvel.mp4';
import geographic from '../assets/videos/geographic.mp4';
import pixar from '../assets/videos/pixar.mp4';
import starwars from '../assets/videos/starwars.mp4';
import v_disney from '../assets/images/v_disney.png';
import v_marvel from '../assets/images/v_marvel.png';
import v_national from '../assets/images/v_national.png';
import v_pixar from '../assets/images/v_pixar.png';
import v_starwars from '../assets/images/v_starwars.png';

function Viewer() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  //bg-[url(${background})]
  return (
    <div className='flex mt-9 px-4 flex-col items-center md:flex-row sm:items-center w-[1000] justify-around'>
      <div className='check cursor-pointer relative w-64 m-8 md:w-56 md:h-28 md:m-3 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
        <img className='absolute inset-0 h-full w-full ' src={v_disney} />
        <video className='' ref={vidRef} loop muted autoPlay controls=''>
          <source src={disney} type='video/mp4' />
        </video>
      </div>
      <div className='check cursor-pointer relative w-64 m-8 md:w-56 md:h-28 md:m-3 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
        <img className='absolute inset-0 h-full w-full ' src={v_marvel} />
        <video className='' ref={vidRef} loop muted autoPlay controls=''>
          <source src={marvel} type='video/mp4' />
        </video>
      </div>{' '}
      <div className='check cursor-pointer relative w-64 m-8 md:w-56 md:h-28 md:m-3 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
        <img className='absolute inset-0 h-full w-full' src={v_national} />
        <video className='' ref={vidRef} loop muted autoPlay controls=''>
          <source src={geographic} type='video/mp4' />
        </video>
      </div>{' '}
      <div className='check cursor-pointer relative w-64 m-8 md:w-56 md:h-28 md:m-3 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
        <img className='absolute inset-0 h-full w-full' src={v_starwars} />
        <video className='' ref={vidRef} loop muted autoPlay controls=''>
          <source src={starwars} type='video/mp4' />
        </video>
      </div>{' '}
      <div className='check cursor-pointer relative w-64 m-8 md:w-56 md:h-28 md:m-3 overflow-hidden rounded-lg border-2 border-[#f9f9f91a] hover:border-[#f9f9f9cc] hover:duration-100'>
        <img className='absolute inset-0 h-full w-full' src={v_pixar} />
        <video className='' ref={vidRef} loop muted autoPlay controls=''>
          <source src={pixar} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Viewer;
