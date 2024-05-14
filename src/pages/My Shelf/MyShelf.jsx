import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import BookWide from "@/components/BookWide";
import MainPage from "@pages/MainPage";
import AddBook from "./addBookForm";
import { useUserStore } from "@/components/zuStore";
import axios from "axios";


function MyShelf() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showForm, setShowForm] = useState(false);
  const [userBooks, setUserBooks] = useState([]);

  const getUserBooks = async () => {
    try {
      const user = useUserStore.getState().user;
      var emailPrefix = user.email;
      emailPrefix = emailPrefix.split("@")[0];
      const route = "/user/" + emailPrefix + "/books";
      const response = await axios.get(route);
      console.log(response.data);
      setUserBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getBookCovers = async () => {
    try {
      console.log("wtf");
      for (let i = 0; i < userBooks.length; i++) {
        //request backend using axois
        const file = `${userBooks[i].cover}`;
        const response = await axios.get("/pdf/cover", {file: file});
        console.log(response.data);
        const {cover} = response.data;
        setUserBooks((prev) => {
          const newBooks = [...prev];
          newBooks[i].cover = cover;
          return newBooks;
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    getUserBooks();
    getBookCovers();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUploadClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = async () => {
    try {
      getUserBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainPage>
      <div className="flex mt-2">
        <Button text="Upload books" onClick={handleUploadClick} />
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex relative bg-white rounded w-[35%] h-[80%] lg:h-[70%] items-center justify-center overflow-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 px-2 py-1 rounded cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <AddBook setUserBooks={setUserBooks} />
          </div>
        </div>
      )}  

      <div className={`flex flex-col gap-y-8 ${userBooks.length == 0 ? "justify-center items-center h-[50vh]": ""}`}>
        {userBooks.length > 0 ? (
          userBooks.map((book) => (
            <BookWide key={book._id} book={book} setUserBooks={setUserBooks} />
          ))
        ) : (
          <div className="text-xl">No books. 😞</div>
        )}
      </div>
    </MainPage>
  );
}

export default MyShelf;
