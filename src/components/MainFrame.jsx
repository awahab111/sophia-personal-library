import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import SideMenu from './Navigation';


function MainFrame() {

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className='flex h-screen overflow-hidden justify-center items-center py-3'>
      <SideMenu/>
      <div className='w-5/6 overflow-auto flex justify-center items-center bg-[#AEBCDA] h-full rounded-md'>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default MainFrame;