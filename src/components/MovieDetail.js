import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllMovies } from '../redux/feature/movie/movieSlice';
import { FaPlay } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import play_black from '../assets/images/play_black.png';
import group_icon from '../assets/images/group_icon.png';
import Loading from './Loading';
function MovieDetail() {
  const allMovies = useSelector(selectAllMovies);
  const { id } = useParams();
  const [currInfo, setCurrInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cardInfo = allMovies.filter((curr) => curr.id === id)[0];
    console.log(cardInfo);
    setCurrInfo(cardInfo);
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, []);
  return (
    <>
      {loading ? <Loading /> : <div></div>}
      <div className={`${loading ? 'opacity-0' : 'opacity-1'}`}>
        {' '}
        <div
          className={`p-10 bg-[url(${currInfo.backgroundImg})] pt-28 bg-cover bg-no-repeat h-screen w-screen z-0`}
        >
          <img
            className='ml-6 z-10 top-28 w-4/12 h-4/12 sm:w-1/4 sm:h-2/6'
            src={currInfo.titleImg}
          />
          <div className='pt-10 flex justify-start items-center'>
            <div className='check cursor-pointer bg-[#00000080] m-4 flex justify-center p-2  text-black items-center border rounded border-white bg-white'>
              <img className='h-8 w-8' src={play_black} /> PLAY
            </div>
            <div className='check cursor-pointer bg-[#00000080] m-4 w-28 flex justify-center p-3 items-center border rounded border-white'>
              <FaPlay />
              &nbsp;
              <div className=''>TRAILER</div>
            </div>
            <div className='bg-black p-2 rounded-full h-12 w-12 border border-white '>
              <FiPlus size='35px' className='pr-1 pb-1' />
            </div>
            <div className='bg-black m-4 p-2 rounded-full h-12 w-12 border border-white '>
              <img src={group_icon} />
            </div>
          </div>
          <div className='pt-5'>{currInfo.subTitle}</div>
          <div className='pt-5 w-full md:w-3/5'>{currInfo.description}</div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
