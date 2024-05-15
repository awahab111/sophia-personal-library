import React, { useState, useSyncExternalStore } from "react";
import MainPage from "../MainPage";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookInformation() {

  let id = useParams();
  console.log(id.bookid);
  const [book, setBook] = useState('')

  async function getBookInformation(id) {
    const route = `/book?id=${id.bookid}`;
    console.log(route)
    try {
      const response = await axios.get(route);
      setBook(response.data);
      console.log(book);
    } catch (error) {
      console.error(`Error fetching book information: ${error}`);
    }
  }

  getBookInformation(id);

  return (
    <MainPage>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-black font-bold text-[45px] p-4">
          {book.title}
        </h1>
        <div className="flex gap-4 p-4 bg-white rounded-[25px]">
          <img
            src={`/${book.cover}`}
            alt={book.title}
            className="w-[200px] h-[300px] rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-black font-bold text-[30px]">{book.author}</h2>
            <h2 className="text-black text-[25px]">{book.genre}</h2>
            
            <p className="text-black font-light text-[20px]">
              <span className="font-semibold" > Date Added: </span>
              {new Date(book.published).toLocaleDateString()}
            </p>

            <h2 className="font-semibold text-[20px]" > Description: </h2>
            {book.description ? (
              <p className="text-black font-light text-[20px]">
                {book.description}
              </p>
            ) : (
              <p className="text-black font-light text-[20px]">
                No description availible :(
              </p>
            )}

          </div>
        </div>
      </div>
    </MainPage>
  );
}
