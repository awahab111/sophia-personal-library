import logo from '@assets/logo.png'
import { useState } from 'react';

function SideMenu(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
return (
  <div className='w-1/6 h-screen my-auto  bg-cyan-900 rounded-md flex flex-col p-4 text-xl'>
          <img className="mx-auto mb-4 w-20 top-0" src={logo} alt="Logo" />

          <ul className={`flex flex-col justify-center text-white ${windowWidth < 920 && "items-center"}`}>
            <li className=' rounded-lg'><i className={`fas fa-home p-3`}></i>{windowWidth > 920 && ' Home'}</li>
            <li className=' rounded-lg'><i className={`fas fa-info-circle p-3`}></i>{windowWidth > 920 && ' About'}</li>
            <li className=' rounded-lg'><i className={`fas fa-envelope p-3`}></i>{windowWidth > 920 && ' Contact'}</li>
          </ul>
      </div>
);
}

export default SideMenu;