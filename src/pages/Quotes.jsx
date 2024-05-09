function Quotes({quote, author}) {

    quote = "thee";
    author = "me";
  return (
    <div className="flex w-[100%] h-[200px] bg-[#AEBCDA] rounded-[25px] p-4 shadow-md">
        <div className="flex w-[100%] h-[100%] flex-col">
            <h1 className="text-black text-[24px] font-bold">{quote}</h1>
            <h1 className="text-black text-[18px] font-bold">{author}</h1>
        </div>
    </div>
  );
}

export default Quotes;
