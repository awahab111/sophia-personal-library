import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import BookWide from '@/components/BookWide';   
import MainPage from '@pages/MainPage';
import AddBook from './addBookForm';    

function MyShelf() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleUploadClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };


    return (
        <MainPage>
            <div className="flex">
                <Button text="Upload books" onClick={handleUploadClick}/>
            </div>
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex relative bg-white rounded w-[35%] h-[60%] lg:h-[50%] items-center justify-center overflow-auto">
                    <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 px-2 py-1 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <AddBook />
                </div>
            </div>
        )}

            <div className='flex flex-col gap-y-8'>
                <BookWide />
                <BookWide />
                <BookWide />
            </div>
        </MainPage>
    );
}

export default MyShelf;
