import React from 'react'
import logo from '@assets/logo.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Navigation from '@/components/Navigation'
import Searchbar from '@/components/Searchbar' 
import DateTime from '@/components/DateTime' 


function Welcome(){
    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
        };
    
    // useEffect(() => {
    //     window.addEventListener('resize', updateDimensions);
    //     return () => window.removeEventListener('resize', updateDimensions);
    // }, []);
    
    return (
    <div className='flex h-screen overflow-hidden justify-center items-center py-3'>
        <Navigation/>
        <div className='w-11/12 overflow-auto flex bg-[#F3F3F7] h-full rounded-[25px] ml-2 mr-2'>
            <Searchbar />
            <DateTime/>
        </div>
    </div>
    );
}

export default Welcome;