import { Dropdown } from "flowbite-react";

function Searchbar() {
  return (
    <div className="relative h-[50px] flex w-[100%] lg:w-[55%] bg-white my-4 rounded-[25px] shadow-md">
      <div className="hidden lg:flex w-[0] lg:w-[18%] lg:bg-[#AEBCDA] rounded-l-[25px] justify-center items-center">
        <Dropdown label="Options" className="" inline>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">All</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Books</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Authors</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Genres</Dropdown.Item>
        </Dropdown>
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
