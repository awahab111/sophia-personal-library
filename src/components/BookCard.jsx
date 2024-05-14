import React from "react";

const BookCard = ({book}) => {

  return (
    //max width??? 
    <div className="max-w-sm bg-white rounded-[10px] overflow-hidden shadow-lg p-3 w-[160px] h-[260px] mx-auto">
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
