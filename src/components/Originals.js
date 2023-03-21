import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectOriginal } from '../redux/feature/movie/movieSlice';
import Cards from './Cards';

function Originals() {
  const original_movies = useSelector(selectOriginal);

  return (
    <>
      <div className='mt-4 mb-16'>
        <h2 className='text-2xl tracking-normal p-4  pb-0'>Hotstar Original</h2>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          {original_movies.map((curr) => (
            <div key={curr.id}>
              <Link to={`/details/${curr.id}`}>
                <Cards img={curr.cardImg} key={curr.id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Originals;
