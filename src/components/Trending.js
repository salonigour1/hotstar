import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTrending } from '../redux/feature/movie/movieSlice';
import Cards from './Cards';

function Trending() {
  const trending_movies = useSelector(selectTrending);
  console.log(trending_movies);

  return (
    <div>
      <div className='mt-4'>
        <h2 className='text-2xl tracking-normal p-4  pb-0'>Trending</h2>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          {trending_movies.map((curr) => (
            <div key={curr.id}>
              <Link to={`/details/${curr.id}`}>
                <Cards img={curr.cardImg} key={curr.id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
