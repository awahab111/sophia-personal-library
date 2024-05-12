function Profile() {
    const profile = {
      pp: "https://letsenhance.io/static/66c1b6abf8f7cf44c19185254d7adb0c/28ebd/AiArtBefore.jpg",
    };
  
    return (
      <div className="lg:flex lg:w-[12%] bg-white lg:my-4 rounded-full lg:rounded-[25px] shadow-md ">
        <div className="flex lg:mx-1 my-auto lg:w-[25%]">
          {/* Add user image over here  */}
          <img className='rounded-full w-[33px] h-[33px] lg:w-[38px] lg:h-[38px] ' src={profile.pp}></img>
        </div>
        <div className="hidden w-0 lg:flex lg:w-[75%] mx-auto text-center">
          <h1 className="my-auto overflow-auto">Abdul Wahab</h1>
          <i className="fas fa-caret-down my-auto mx-auto text-[#F76B56]"></i>
        </div>
      </div>
    );
  }

  export default Profile;