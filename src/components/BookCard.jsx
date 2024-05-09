import React from "react";

const BookCard = () => {
  const book = {
    title: "Dummy Book",
    author: "Dummy Author",
    description: "This is a dummy book ahahha This is a dummy book ahahha This is a dummy book ahahha",
    coverImage: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  };

  return (
    //max width??? 
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg p-5 w-[20%]">
      <img
        className="w-full rounded-lg"
        src={book.coverImage}
        alt="Sunset in the mountains"
      />
      <div className=" py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">
            {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
