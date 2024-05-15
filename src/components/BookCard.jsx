import React from "react";

const BookCard = ({book}) => {

  return (
    // Book card component for a single book accepts a book prop to display the respective book
    <div className="max-w-sm bg-white rounded-[10px] overflow-hidden shadow-lg p-2 w-[160px] h-[260px] transform hover:scale-110 mx-auto hover:shadow-2xl duration-300 ">
      <img
        className="w-[130px] h-[171px] rounded-[5px] mx-auto"
        src={book.cover}
        alt="Sunset in the mountains"
      />
      <div className="py-3 ml-1 mx-auto">
        <h1 className="text-md">{book.title}</h1>
        <p className="text-gray-500 text-sm">
            {book.author}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
