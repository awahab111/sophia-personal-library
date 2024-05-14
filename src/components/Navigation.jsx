import logo from '@assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import { useEffect } from 'react';

function Navigation(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const profile = {
    pp: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  };

  return (
    <div className='h-[60px] w-[99%] lg:w-1/12 lg:h-full lg:my-auto mt-2 bg-[#E2DCCB] rounded-[15px] lg:rounded-[25px] flex flex-row lg:flex-col items-center text-xl lg:ml-2 order-2 lg:order-none'>
      
      <Link to='/main'><img className="mx-4 lg:mx-auto my-auto w-[32px] lg:w-[50%] lg:my-10" src={logo} alt="Logo" /></Link>
      <ul className={`flex flex-row items-center justify-center lg:flex-col mx-auto  lg:space-x-0`}>
        <li><i className={`fas fa-home iconStyle`}></i></li>
        <li><Link to='/myshelf'><i className={`fas fa-navicon iconStyle`}></i> </Link></li>
        <li><i className={`fas fa-envelope iconStyle`}></i></li>
      </ul>
      {windowWidth <= 1024 && 
        <div className='mr-5 ring-2 rounded-full ring-[#AEBCDA] '>
          <Profile />
        </div>
      }
    </div>
  );
}

export default Navigation;