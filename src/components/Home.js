import React, { useEffect, useState } from 'react';
import './style.css';
import background2 from '../assets/images/background2.png';
import ImageSlider from './ImageSlider';
import Recommend from './Recommend';
import Viewer from './Viewer';
import NewDisney from './NewDisney';
import Trending from './Trending';
import Originals from './Originals';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../redux/feature/users/userSlice';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { setMovie } from '../redux/feature/movie/movieSlice';
import Loading from './Loading';

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  console.log(loading);
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const fetchPost = async () => {
    const recommends = [];
    const new_disney = [];
    const trendy = [];
    const originals = [];
    await getDocs(collection(db, 'movies')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((curr) => {
        if (curr.data().type === 'original')
          originals.push({ id: curr.id, ...curr.data() });
        else if (curr.data().type === 'recommend')
          recommends.push({ id: curr.id, ...curr.data() });
        else if (curr.data().type === 'trending')
          trendy.push({ id: curr.id, ...curr.data() });
        else if (curr.data().type === 'new')
          new_disney.push({ id: curr.id, ...curr.data() });
        return { id: curr.id, ...curr.data() };
      });
      console.log(newData);
      dispatch(
        setMovie({
          allMovies: newData,
          recommend: recommends,
          newDisney: new_disney,
          original: originals,
          trending: trendy,
        })
      );
    });
  };

  useEffect(() => {
    fetchPost();
  }, [username]);
  return (
    <>
      {loading ? <Loading /> : <div></div>}

      <div className={`${loading ? 'opacity-0' : 'opacity-1'}`}>
        <div
          className={`relative top-20 box-border left-0 right-0 bg-[url(${background2})] bg-no-repeat bg-cover bg-center overflow-x-hidden bg-slate-300 h-screen `}
        >
          <ImageSlider />
          <Viewer />
          <Recommend />
          <NewDisney />
          <Trending />
          <Originals />
        </div>
      </div>
    </>
  );
}

export default Home;
// bg-[url(${background})]
