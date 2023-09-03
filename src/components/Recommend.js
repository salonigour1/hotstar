import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRecommend } from '../redux/feature/movie/movieSlice';
import Cards from './Cards';

function Recommend() {
  const recommend_movies = useSelector(selectRecommend);
  console.log(recommend_movies);
  return (
    <>
      <div className='mt-4'>
        <h2 className='text-2xl tracking-normal p-4 pb-0'>
          Recommended For You
        </h2>
        <div className='flex flex-row flex-wrap justify-center items-center'>
          {recommend_movies.map((curr) => (
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
export default Recommend;
