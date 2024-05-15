import React from 'react'
import { useParams } from 'react-router-dom'
import MainPage from '../MainPage'
import { useUserStore } from '@/components/zuStore';

export default function ProfilePage() {
    const user = useUserStore((state) => state.user);

    const profile = {
        pp: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${user.fullname}`,
      };

    console.log(user);

    return (
        <MainPage>
            <div className="max-w-md h-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 mt-5 flex items-center justify-center ">
                        <img className="h-48 w-full object-cover md:w-48" src={profile.pp} alt="User profile" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Full Name</div>
                        <p className="mt-2 text-gray-500">{user.fullname}</p>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Email</div>
                        <p className="mt-2 text-gray-500">{user.email}</p>
                        <div className="mt-4 flex flex-col gap-y-5 ">
                            <button className="bg-white hover:bg-[#f89f76] ring-[#f89f76] ring-1 hover:text-white text-[#f89f76] font-medium text-sm rounded-full p-3 " >Change Password</button>
                            <button className="bg-white hover:bg-[#f89f76] ring-[#f89f76] ring-1 hover:text-white text-[#f89f76] font-medium text-sm rounded-full p-3 " >Change Email</button>
                            <button className="bg-white hover:bg-[#ff6464] ring-[#ff6464]  ring-1 hover:text-white text-[#ff6464] font-medium text-sm rounded-full p-3">Delete User</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainPage>
    );
}