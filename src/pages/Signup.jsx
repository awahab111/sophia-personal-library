import React from 'react'
import dio from '@assets/dio.jpg'
import logo from '@assets/logo.png'
import { FormLabel, FormInput, FormButton } from '@components/Form.jsx';

function Signup({className}) {
    return (
        // Not responsive :(
        <div className="flex items-center min-h-screen bg-off-white">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white shadow-xl rounded-[25px]">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full rounded-l-[25px]" src={dio} alt="description_of_image" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <img className="mx-auto mb-4 w-20 top-0" src={logo} alt="Logo" />  {/*Logo*/}
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Registration
                            </h1>
                            <p className="text-[12px] text-center text-gray-500 mb-4">Sign up to create your own Digital Library</p>
                            <form>
                                <FormLabel name="First Name" />
                                <FormInput name="first_name" type="text" />

                                <FormLabel name="Last Name" />
                                <FormInput name="last_name" type="text" />

                                <FormLabel name="Email" />
                                <FormInput name="email" type="email" />

                                <FormLabel name="Password" />
                                <FormInput name="password" type="password" />

                                <FormLabel name="Confirm Password" />
                                <FormInput name="confirm_password" type="password" />

                                <FormButton name="Register" />
                                <p className="mt-4 text-xs text-left text-gray-500">Already a member? <a href="#" className="text-blue-500">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Signup