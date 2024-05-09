function Searchbar() {
  return (
    <div className="flex w-[45%] bg-white my-4 rounded-[25px] shadow-md">
      <div className="flex w-[20%] bg-[#AEBCDA] rounded-l-[25px]">
      <select
          className="mx-auto my-auto rounded-l-[25px] bg-[#AEBCDA] text-center focus:outline-0"
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
        className="w-[75%] h-[90%] my-auto mx-auto ml-2 focus:outline-0"
        type="text"
        placeholder="Search..."
      />
      <i className="fas fa-search my-auto w-[5%] text-[#F76B56] "></i>
    </div>
  );
}

export default Searchbar;
