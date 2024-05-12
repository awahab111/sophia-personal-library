import React from "react";

const BookCard = () => {
  const book = {
    title: "Book",
    author: "Author",
    description: "This is a dummy book ahahha This is a dummy book ahahha This is a dummy book ahahha",
    coverImage: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  };

  return (
    //max width??? 
    <div className="max-w-sm bg-white rounded-[10px] overflow-hidden shadow-lg p-3 w-[160px] h-[260px] mx-auto">
      <img
        className="w-[130px] h-[171px] rounded-[5px] mx-auto"
        src={book.coverImage}
        alt="Sunset in the mountains"
      />
      <div className="py-3 ml-1 mx-auto">
        <h1 className="text-lg">{book.title}</h1>
        <p className="text-gray-500 text-sm">
            {book.author}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
