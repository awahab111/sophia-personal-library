import { Dropdown } from "flowbite-react";

function Profile() {
  const profile = {
    pp: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
  };

  return (
    <div className="lg:flex lg:w-[15%] bg-white lg:my-4 rounded-full lg:rounded-[25px] shadow-md gap-2 ">
      <div className="flex lg:mx-1 my-auto lg:w-[25%]">
        <img
          className="rounded-full w-[33px] h-[33px] lg:w-[38px] lg:h-[38px] "
          src={profile.pp}
        ></img>
      </div>
      <div className="hidden w-0 lg:flex lg:w-[75%] mx-auto text-center gap-2">
        <h1 className="my-auto overflow-auto">Abdul Wahab</h1>
        {/* <i className="fas fa-caret-down my-auto mx-auto text-[#F76B56]"></i> */}
        <Dropdown label="" inline>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Dashboard</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Profile</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Settings</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Log Out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default Profile;
