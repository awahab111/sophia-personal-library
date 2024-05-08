import React from 'react'
import logo from '@assets/logo.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Navigation from '@/components/Navigation'
import Searchbar from '@/components/Searchbar' 
import DateTime from '@/components/DateTime' 
import BookCard from '@/components/Book';

function Profile(){
    return (
        <div className="flex w-[15%] h-[4%] bg-white mx-auto my-4 rounded-[25px] shadow-md">
            <div className="flex w-[25%]">
                <i className="far fa-clock my-auto mx-5 text-[#F76B56]"></i> 
                {/* Add user image over here  */}
            </div>
            <div className="flex w-[75%]">
                <h1 className="my-auto overflow-auto"> Abdul Wahab </h1>
            </div>
        </div>
    )
}

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
        <div className='w-11/12 overflow-auto bg-[#F3F3F7] h-full rounded-[25px] ml-2 mr-2'>
            <div className='flex'>
                <Searchbar />
                <DateTime/>
                <Profile />
            </div>
            <div className='flex'>
                <BookCard />
            </div>
        </div>
    </div>
    );
}



export default Welcome;