import React, { useState, useEffect } from 'react';
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navigation from "@/components/Navigation";
import Searchbar from "@/components/Searchbar";
import DateTime from "@/components/DateTime";
import BookCard from "@/components/BookCard";
import Quotes from "@pages/Quotes";
import Profile from "@/components/Profile";
import Stats from "@pages/Stats";

// const Quote = require('inspirational-quotes');



function Welcome() {
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

//   const quote_obj = Q.getRandomQuote();
//   console.log("this is the quote", quote_obj.text, quote_obj.author);

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
          <br />
          <div className='flex flex-wrap justify-center ' >
            <Quotes />
            <div className='w-[1%]' ></div> {/*this is a spacer*/}
            <Stats/>
          </div>
          <br />
          <h1 className=" font-semibold text-[30px] text-gray-700 font-mono ml-1 " >Welcome Back Abdul Wahab</h1>
          <h2 className='text-[20px] ml-2 ' > Currently Reading</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap sm:gap-x-5 gap-y-4 mx-1">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
