import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import BookWide from '@/components/BookWide';   
import MainPage from '@pages/MainPage';

function MyShelf() {
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
    

    
    return (
        <MainPage>
            <br/>
            <div className="flex">
                <Button text="Upload books"/>
            </div>
            <div className='flex ml-4 font-bold text-[16px] text-gray-600 -mb-5'>
                <h1 className='w-[29%]' >Title</h1>
                <h1>Description </h1>
            </div>
            <div className='flex flex-col gap-y-8'>
                <BookWide />
                <BookWide />
                <BookWide />
            </div>
        </MainPage>
    );
}
export default MyShelf;