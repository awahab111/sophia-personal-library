import { Dropdown } from "flowbite-react";
import { useUserStore } from "./zuStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Profile() {

  
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const profile = {
    pp: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${user.fullname}`,
  };

  const handleLogout = () => {
    console.log("Logging out");
    useUserStore.setState({ user: null });
    toast.success("Logged out successfully");
    navigate("/");
  }

  const handleProfile = () => {
    console.log("Profile clicked");
    navigate(`/profile`);
  }


  return (
    <div className="lg:flex lg:w-[15%] bg-white lg:my-4 rounded-full lg:rounded-[25px] shadow-md gap-2 ">
      <div className="flex lg:mx-1 my-auto lg:w-[25%]">
        <img
          className="rounded-full w-[33px] h-[33px] lg:w-[38px] lg:h-[38px] "
          src={profile.pp}
        ></img>
      </div>
      <div className="hidden w-0 lg:flex lg:w-[75%] mx-auto text-center gap-2">
        <h1 className="my-auto overflow-auto">{user.fullname}</h1>
        {/* <i className="fas fa-caret-down my-auto mx-auto text-[#F76B56]"></i> */}
        <Dropdown label="" inline>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Dashboard</Dropdown.Item>
          <Dropdown.Item onClick={handleProfile} className="hover:bg-[#AEBCDA]">Profile</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]">Settings</Dropdown.Item>
          <Dropdown.Item className="hover:bg-[#AEBCDA]" onClick={handleLogout}>Log Out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default Profile;
