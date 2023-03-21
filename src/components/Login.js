import React from 'react';
import background from '../assets/images/background.jpg';
import icons from '../assets/images/icons.svg';
import b_icons from '../assets/images/b_icons.png';
{
  /* <img src={background} /> */
}
function Login() {
  return (
    <div
      //   style={`background-image: url("${background}");`} top-9 left-1/2
      className={`overflow-hidden bg-black flex flex-col text-center h-screen justify-center relative bg-[url(${background})] bg-no-repeat bg-cover bg-center h-full z-1`}
    >
      <div
        className={`bg-[url(${background})] bg-no-repeat bg-cover bg-center h-full bg-fixed absolute z-10`}
      >
        <div className='bg-transparent w-screen flex flex-col justify-center  items-center absolute inset-1/3'>
          <img
            src={icons}
            className='bg-transparent mb-6 h-16 w-full md:h-28'
          />
          <div className='bg-[#0063e5] w-1/2 p-3 m-3 tracking-wider font-medium text-lg rounded hover:bg-[#0483ee] md:w-2/5 md:p-2'>
            GET IT ALL THERE
          </div>
          <div className='w-2/5 m-3 bg-transparent text-[#f2f2f2] text-xs tracking-wider'>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </div>
          <img
            src={b_icons}
            className='bg-transparent mb-3 w-1/2 h-full p-2 md:w-2/5'
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
