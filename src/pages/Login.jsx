import React from 'react'
import logo from '@assets/logo.png'
import login from '@assets/login.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { FormLabel, FormInput, FormButton } from '@components/Form.jsx';

function Login({className}) {

    const handleSubmission = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        axios.post('/login', data)
            .then((res) => {
                console.log(res.data);
                toast.success("Login successful!");
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response.data.message);
                
            });
    }

    return (
        <>
        <div className="flex items-center min-h-screen bg-off-white">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white shadow-xl rounded-[25px]">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full rounded-l-[25px]" src={login} alt="description_of_image" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <img className="mx-auto mb-4 w-20 top-0" src={logo} alt="Logo" />  {/*Logo*/}
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Welcome Back
                            </h1>
                            <p className="text-[12px] text-center text-gray-500 mb-4">Sign in to continue to your Digital Library</p>
                            <br />
                            <form onSubmit={handleSubmission}>

                                <FormLabel name="Email" />
                                <FormInput name="email" type="email" />

                                <FormLabel name="Password" />
                                <FormInput name="password" type="password" />

                                <br />

                                <input type="checkbox" className="mt-2 " />
                                <label className="text-xs text-gray-500">  Remember me</label>
                                <div className="flex justify-end">
                                    <a href="#" className="text-xs text-blue-500">Forgot Password?</a>
                                </div>                                
                                <FormButton name="Login" />
                                <br />
                                <p className="mt-4 text-xs text-left text-gray-500">Not a member? <Link to="/signup" className="text-blue-500">Register</Link></p>
                                <div style={{ marginBottom: '3em' }}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}



export default Login