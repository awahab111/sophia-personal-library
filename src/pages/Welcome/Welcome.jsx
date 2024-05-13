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

  var quote_obj = Quote.getQuote({author: true});
  var random = Quote.getRandomQuote();
  if (quote_obj.text.length > 110) {
    quote_obj.text = random;
  }

  return (
    <MainPage>
      <br />
      <div className='flex flex-wrap justify-center ' >
        <Quotes quote={quote_obj.text} author={quote_obj.author}  />
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
    </MainPage>
  );
}

export default Welcome;
