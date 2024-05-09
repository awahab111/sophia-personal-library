import logo from '@assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);
  return (
    <div className='w-1/12 h-full my-auto bg-[#E2DCCB] rounded-[25px] flex flex-col text-xl ml-2'>
      <Link to='/main'><img className="mx-auto w-[50%] mt-10 mb-10" src={logo} alt="Logo" /></Link>

      <ul className={`flex flex-col justify-center items-center }`}>
        <li><i className={`fas fa-home iconStyle `}></i></li>
        <li><i className={`fas fa-info-circle iconStyle`}></i></li>
        <li><i className={`fas fa-envelope iconStyle`}></i></li>
      </ul>
    </div>
  );
}

export default Navigation;