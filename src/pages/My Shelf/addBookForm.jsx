import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormButton, FormInput, FormLabel } from '@/components/Form';

function AddBook(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop, accept: 'application/pdf', noClick: true });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Title:', title);
        console.log('Author:', author);
    };

    return(
        
        <div className='flex flex-col gap-y-7 justify-center w-[90%] h-full ' >
            <div className="h-[10%]">
                <h1 className='text-center text-gray-700 font-semibold text-lg mt-4 '>Add Book</h1>
            </div>
            <div className="h-[80%]">
                <form onSubmit={handleSubmit}>
                    <FormLabel name="Title:" />
                    <FormInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <br />
                    <FormLabel name="Author:"/>
                    <FormInput type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    <br />
                    <div {...getRootProps({className: 'dropzone w-full h-full flex flex-col items-center justify-center border-dashed border-2 p-4'})}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop your books here</p>
                        <button type="button" onClick={open} className="bg-[#f89f76] ring-[#f89f76] hover:ring-1 hover:bg-white hover:text-[#f89f76] text-white font-medium text-sm py-2 px-4 rounded-full cursor-pointer mt-4">
                            Browse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );   
}

export default AddBook;