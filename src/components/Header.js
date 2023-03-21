import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg';
import { BiSearch } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { AiFillHome, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import { RiMovie2Line, RiRadioFill } from 'react-icons/ri';
import { auth, provider } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetail,
  setSignOutState,
} from '../redux/feature/users/userSlice';
// import GoogleButton from 'react-google-button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button';
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const photo = useSelector(selectUserPhoto);
  const [logout, setLogout] = useState(false);
  console.log(photo);
  useEffect(() => {
    auth.onAuthStateChanged(async (data) => {
      if (data?.displayName) {
        setUser(data);
        navigate('/home');
      }
    });
  }, [username]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetail({
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      })
    );
  };
  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((allUserInfo) => {
          setUser(allUserInfo.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (username) {
      signOut(auth, provider)
        .then(() => {
          dispatch(setSignOutState());
          navigate('/');
        })
        .catch((err) => console.log(err.message));
      setLogout(false);
    }
  };
  return (
    <div className='fixed bg-black top-0 left-0 h-20 z-50 flex justify-start items-center px-6 pt-2 w-screen '>
      <Link to='/home'>
        <img
          src={logo}
          width='120px'
          height='40px'
          alt='Disney+'
          className='w-22 h-full inline-block'
        />
      </Link>

      {!username ? (
        <div
          onClick={handleAuth}
          className='text-purple-50 absolute right-6 border tracking-widest border-white cursor-pointer px-4 py-2 rounded hover:bg-white hover:text-black'
        >
          LOGIN
        </div>
      ) : (
        <div className='text-center hidden flex-nowrap h-full justify-end items-center m-6 lg:flex'>
          <Link to='/home'>
            <div className='flex items-center p-2 tracking-widest text-sm'>
              <AiFillHome size='20px' />
              <span className='p-2 cursor-pointer'>HOME</span>
            </div>
          </Link>
          <div className='flex items-center p-2 tracking-widest text-sm'>
            <BiSearch size='20px' />
            <span className='p-2 cursor-pointer'> SEARCH</span>
          </div>
          <div className='flex items-center p-2 tracking-widest text-sm'>
            <FaPlus size='20px' />
            <span className='p-2 cursor-pointer'> WATCHLIST</span>
          </div>
          <div className='flex items-center p-2 tracking-widest text-sm '>
            <AiFillStar size='20px' />
            <span className='p-2 cursor-pointer'> ORIGINALS</span>
          </div>
          <div className='flex items-center p-2 tracking-widest text-sm'>
            <RiMovie2Line size='20px' />
            <span className='p-2 cursor-pointer'>MOVIES</span>
          </div>
          <div className='flex items-center p-2 tracking-widest text-sm'>
            <RiRadioFill size='20px' />
            <span className='p-2 cursor-pointer'> SERIES</span>
          </div>
        </div>
      )}
      <div className='absolute right-6 z-100000'>
        <img
          src={photo}
          alt={username.split(' ')[0]}
          onClick={() => {
            setLogout((log) => !log);
          }}
          className=' h-14 rounded-full'
        />

        {/* <select>
            <></>
          <option>LOG OUT</option>
        </select> */}
      </div>
      {logout ? (
        <div
          onClick={handleAuth}
          className='absolute top-20 right-6 border tracking-widest border-white cursor-pointer px-4 py-2 rounded bg-black hover:bg-white hover:text-black z-10000000'
        >
          LOG OUT
        </div>
      ) : (
        <></>
      )}
      {/* {username ? (
        <div
          onClick={handleAuth}
          className='absolute top-20 right-6 border tracking-widest border-white cursor-pointer px-4 py-2 rounded hover:bg-white hover:text-black z-10000000'
        >
          LOG OUT
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default Header;
