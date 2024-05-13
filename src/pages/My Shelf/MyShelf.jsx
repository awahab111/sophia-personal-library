import React, { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Searchbar from "@/components/Searchbar";
import DateTime from "@/components/DateTime";
import BookCard from "@/components/BookCard";
import Quotes from "@/pages/Welcome/Quotes";
import Profile from "@/components/Profile";
import Stats from "@/pages/Welcome/Stats";
import Quote from 'inspirational-quotes';
import MainPage from '../MainPage';

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
    
    var quote_obj = Quote.getQuote({author: true});
    var random = Quote.getRandomQuote();
    if (quote_obj.text.length > 110) {
        quote_obj.text = random;
    }
    
    return (
        <MainPage>
            Myshelf
        </MainPage>
    );
}
export default MyShelf;