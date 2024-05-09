import React from "react";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import Navigation from "@/components/Navigation";
import Searchbar from "@/components/Searchbar";
import DateTime from "@/components/DateTime";
import BookCard from "@/components/BookCard";
import Quotes from "@pages/Quotes";

// const Quote = require('inspirational-quotes');

function Profile() {
  const profile = {
    pp: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  };

  return (
    <div className="flex w-[15%] bg-white my-4 rounded-[25px] shadow-md">
      <div className="flex w-[25%]">
        <img className='rounded-[100%]' src={profile.pp}></img>
        {/* Add user image over here  */}
      </div>
      <div className="flex w-[75%]">
        <h1 className="my-auto overflow-auto"> Abdul Wahab </h1>
      </div>
    </div>
  );
}

function Welcome() {
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  // useEffect(() => {
  //     window.addEventListener('resize', updateDimensions);
  //     return () => window.removeEventListener('resize', updateDimensions);
  // }, []);

//   const quote_obj = Q.getRandomQuote();
//   console.log("this is the quote", quote_obj.text, quote_obj.author);

  return (
    <div className="flex h-screen overflow-hidden justify-center items-center py-3">
      <Navigation />
      <div className="w-11/12 overflow-auto bg-[#F3F3F7] items-center justify-center h-full rounded-[25px] p-4 ml-2 mr-2">
        <div className="flex max-h-24 gap-20 justify-between">
          <Searchbar />
          <DateTime />
          <Profile />
        </div>
        <div className="flex flex-col gap-5">
          <div><Quotes /></div>
          <div className="flex gap-5 flex-wrap ">
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
