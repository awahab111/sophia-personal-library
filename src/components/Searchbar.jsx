function Searchbar() {
  return (
    <div className="relative flex w-[100%] lg:w-[55%] bg-white my-4 rounded-[25px] shadow-md">
      <div className="flex w-[0] lg:w-[18%] lg:bg-[#AEBCDA] rounded-l-[25px]">
        <select
            className="mx-auto my-auto rounded-l-[25px] lg:bg-[#AEBCDA] text-center focus:outline-0"
            style={{ 
              padding: "10px",
            }}
          >   
            <option value="option1">All</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
      </div>
      <input
        className="w-[90%] lg:w-[75%] lg:h-[90%] my-auto mx-auto ml-2 focus:outline-0"
        type="text"
        placeholder="Search..."
      />
      <i className="absolute top-[15px] lg:top-5 right-4 fas fa-search my-auto mx-auto w-[5%] text-[#F76B56] "></i>
    </div>
  );
}

export default Searchbar;
