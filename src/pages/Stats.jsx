function Stats({quote, author}) {

    quote = "Amogus Amogus Amogus";
    author = "me";
  return (
    <div className="hidden sm:flex w-0 sm:w-[49%] h-[200px] bg-[#f89f76] rounded-[10px] p-4 shadow-md">
        <div className="flex w-[80%] h-[70%] flex-col mx-auto my-auto">
            <h1 className="text-white text-[24px] mb-4 ">Leaderboard</h1>
            <h1 className="text-white text-[20px] font-bold">"{quote}"</h1>
            <h1 className="text-white text-[18px] font-bold text-right">—{author}</h1>
        </div>
    </div>
  );
}

export default Stats;