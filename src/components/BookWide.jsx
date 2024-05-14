import Button from "@components/Button";
import axios from "axios";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function BookWide({ book, setUserBooks }) {

    const navigate = useNavigate();


    const handleDeletion = async () => {
        try {
            const response = await axios.delete(`/book/delete?id=${book.id}`);
            setUserBooks((prev) => prev.filter((b) => b.id !== book.id));
            console.log(response.data);
            toast.success("Book deleted successfully.");
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    }

    const handleRead = async () => {
        try {
            console.log(book);
            navigate(`/read/${book.cover}`);
        } catch (error) {
            console.error(error);
        }
    }

    const ViewBookInformation = async () => {
        try {
            console.log(book);
            navigate(`/book/${book}`);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="flex bg-white rounded-[10px] overflow-hidden shadow-lg p-2 w-full h-[120px] items-center justify-between cursor-pointer hover:shadow-2xl duration-300">
            <div className="flex gap-x-5 ml-2" >
                <img
                    className="w-[75px] h-[99px] rounded-[5px]"
                    src={`/${book.cover}`}
                />
                <div className="py-3 w-[20%]">
                    <h1 className="text-lg font-semibold ">{book.title}</h1>
                    <p className="text-gray-500 text-sm mt-4 font-[350]">
                        {book.author}
                    </p>
                </div>
            </div>
            <div className="py-3 hidden lg:w-[60%] lg:block ">
                <p className="text-gray-700 font-normal text-[15px]">
                    {book.description}
                </p>
            </div>
            {/* New button made here */}
            <div className="flex gap-x-2 items-center justify-center mx-1 lg:w-[11%]">
                <button onClick={handleRead} className="bg-white hover:bg-[#f89f76] ring-[#f89f76] ring-1 hover:text-white text-[#f89f76] font-medium text-sm rounded-full p-3 ">
                <svg class="w-4 h-4 hover:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
                </svg>
                </button>
                <button className="bg-white hover:bg-[#f89f76] ring-[#f89f76] ring-1 hover:text-white text-[#f89f76] font-medium text-sm rounded-full p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9l-3 3v-2.828l9.586-9.586z" />
                    </svg>
                </button>
                <button onClick={handleDeletion} className="bg-white hover:bg-[#ff6464] ring-[#ff6464]  ring-1 hover:text-white text-[#ff6464] font-medium text-sm rounded-full p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default BookWide;