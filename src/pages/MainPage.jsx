import React, { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Searchbar from "@/components/Searchbar";
import DateTime from "@/components/DateTime";
import BookCard from "@/components/BookCard";
import Quotes from "@/pages/Welcome/Quotes";
import Profile from "@/components/Profile";
import Stats from "@/pages/Welcome/Stats";
import Quote from 'inspirational-quotes';


function MainPage({children}) {
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
        <div className="flex flex-col lg:flex-row h-screen overflow-hidden justify-center items-center py-3 ">
        <Navigation />
        <div className=" w-[99%] lg:w-11/12 overflow-auto bg-[#F3F3F7] items-center justify-center h-full rounded-[25px] p-4 mx-2 order-1 lg:order-none">
          <div className="flex max-h-24 gap-5 justify-between">
            <Searchbar />
            <DateTime />
            {windowWidth >= 1024 && <Profile />}
          </div>
          <div className="flex flex-col gap-8">
            {children}
        </div>
        </div>
      </div>
    );
  }
  
  export default MainPage;