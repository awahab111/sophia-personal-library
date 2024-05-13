import Button from "@components/Button";

function BookWide(){
    const book = {
        title: "Book",
        author: "Author",
        description: "This is a dummy book ahahha This is a dummy book ahahha This is a dummy book ahahha",
        coverImage: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
    };

    return (
        <div className="flex bg-white rounded-[10px] overflow-hidden shadow-lg p-2 w-full h-[120px] items-center justify-center">
            <div className="w-[10%] ml-2" >
                <img
                    className="w-[75px] h-[99px] rounded-[5px]"
                    src={book.coverImage}
                    alt="Sunset in the mountains"
                />
            </div>
            <div className="py-3 w-[20%]">
                <h1 className="text-lg font-semibold ">{book.title}</h1>
                <p className="text-gray-500 text-sm mt-4 font-[350]">
                    {book.author}
                </p>
            </div>
            <div className="py-3 w-[60%]">
                <p className="text-gray-700 font-normal text-[15px]">
                    {book.description}
                </p>
            </div>
            {/* New button made here */}
            <div className="flex justify-center items-center w-[10%]">
                <button className=" bg-white hover:bg-[#f89f76]  ring-[#f89f76] ring-1 hover:text-white text-[#f89f76] font-medium text-sm py-2 px-4 rounded-lg w-24 ">
                    Read
                </button>
            </div>
        </div>
    );
}

export default BookWide;