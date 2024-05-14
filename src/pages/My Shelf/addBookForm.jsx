import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormButton, FormInput, FormLabel } from '@/components/Form';
import { set } from 'mongoose';
import axios from 'axios';
import { useUserStore } from '@/components/zuStore';
import { toast } from 'react-hot-toast';

function AddBook({setUserBooks}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const [file, setFile] = useState('');
    const [bookUploaded, setBookUploaded] = useState(false);


    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0]);
        setBookUploaded(true);
        console.log(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop, accept: 'application/pdf', noClick: true });

    const handleSubmission = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.path = file.path;

        const user = useUserStore.getState().user;
        const obj = {user: user, book: data}
        console.log(obj);
        axios.post('/upload/book', obj)
            .then((res) => {
                console.log(res.data);
                const new_book = res.data;
                setUserBooks((prev) => [...prev, new_book]);
                toast.success("Book added successfully."); 
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.response.data.message);
            });
    };


    return(
        
        <div className='flex flex-col p-4 gap-y-7 justify-center w-[90%] h-full ' >
            <div className="h-[10%]">
                <h1 className='text-center text-gray-700 font-semibold text-lg mt-4 '>Add Book</h1>
            </div>
            <div className=" h-[90%]">
                <form onSubmit={handleSubmission} className='flex flex-col gap-y-5' >
                    <div>
                        <FormLabel name="Title:" />
                        <FormInput type="text" value={title} name='title' onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    <div>
                        <FormLabel name="Author:"/>
                        <FormInput type="text" value={author} name='author' onChange={(e) => setAuthor(e.target.value)} required />
                    </div>

                    <div>
                        <FormLabel name="Genre:" />
                        <FormInput type="text" name='genre'/>
                    </div>

                    <div>
                    </div>

                    <div {...getRootProps({className: 'dropzone w-full h-[20%] flex flex-col items-center justify-center border-dashed border-2 p-4'})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop your books here</p>
                        <button type="button" onClick={open} className="bg-[#f89f76] ring-[#f89f76] hover:ring-1 hover:bg-white hover:text-[#f89f76] text-white font-medium text-sm py-2 px-4 rounded-full cursor-pointer mt-4">
                            Browse
                        </button>
                    </div>
                        {bookUploaded && 
                            <p className='font-light text-sm'>
                                <i className="fas fa-check mr-2 text-green-500 "></i>
                                {file.path}
                            </p>
                        }
                        <FormButton name='Submit' ></FormButton>
                </form>
            </div>
        </div>
    );   
}

export default AddBook;