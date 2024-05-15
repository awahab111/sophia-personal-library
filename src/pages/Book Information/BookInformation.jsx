import React from 'react'
import MainPage from '../MainPage'

export default function BookInformation() {
  let book = {}
  book.author = "ME"
  book.description = "VERY GOOD BOOK"
  book.title = "MY BOOK"
  book.cover = "https://covers.openlibrary.org/b/isbn/9780385663465-M.jpg"

  return (
    <MainPage>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-black font-bold text-[45px] p-4">
          {book.title}
        </h1>
        <div className="flex gap-4 p-4">
          <img
            src={book.cover}
            alt={book.title}
            className="w-[200px] h-[300px] rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-black font-bold text-[30px]">{book.author}</h2>
            <p className="text-black font-light text-[20px]">{book.description}</p>
          </div>
        </div>
      </div>

      </MainPage>
  )
}

