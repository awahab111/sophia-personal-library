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
import pdf from '/pdc.pdf';
import 'pdfjs-viewer-element';
import {useNavigate} from 'react-router-dom';
import { useUserStore} from '@components/zuStore'
import Loading from 'react-fullscreen-loading';



function Welcome() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useUserStore(state => state.user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      setIsLoading(false);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <Loading loading background="#F3F3F7" loaderColor="#f89f76"/>;
  }

  var quote_obj = Quote.getQuote({author: true});
  var random = Quote.getRandomQuote();
  if (quote_obj.text.length > 110) {
    quote_obj.text = random;
  }

  return (
    <MainPage>
            {/* <pdfjs-viewer-element style={{height:800 }} viewer-extra-styles="" src={pdf} viewer-path="/pdfjs-4.2.67-dist"></pdfjs-viewer-element> */}

      <br />
      <div className='flex flex-wrap justify-center ' >
        <Quotes quote={quote_obj.text} author={quote_obj.author}  />
        <div className='w-[1%]' ></div> {/*this is a spacer*/}
        <Stats/>
      </div>
      <br />
      <h1 className=" font-semibold text-[30px] text-gray-700 font-mono ml-1 " >Welcome Back {user.fullname}</h1>
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
