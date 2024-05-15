
// replace with a list of leaderboard users
function Stats({quote, author}) {

    quote = "Amogus Amogus Amogus";
    author = "me";
  return (
    <div className="hidden sm:flex w-0 sm:w-[49%] h-[200px] bg-[#f89f76] rounded-[10px] p-4 shadow-md justify-center items-center">
        <div className="flex w-[80%] h-[80%] flex-col ">
            <h1 className="text-white text-[24px] mb-4 ">Reading Statistics</h1>
            <h1 className="text-white text-[20px] font-semibold">You read :  <span className="text-white text-[18px]" >5 books this year</span> </h1>
            <h1 className="text-white text-[20px] font-semibold">You spent : <span className="text-white text-[18px]">46 hours reading</span> </h1>

        </div>
    </div>
  );
}

export default Stats;