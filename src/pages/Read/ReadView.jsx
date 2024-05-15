import React, { useState, useEffect } from 'react';
import MainPage from '../MainPage'
import Timer from './TImer' 
import Dictionary from './Dictionary';
import 'pdfjs-viewer-element'
import { useParams } from 'react-router-dom'


export default function ReadView() {
  const [seconds, setSeconds] = useState(0);

  let {bookname} = useParams();
  const bookPath = `/${bookname}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
        <MainPage >
            <div className="flex gap-x-4">
              <div className="bg-gray-500 w-[69%]">
                <pdfjs-viewer-element style={{ height:"85vh" }} src={bookPath} viewer-path="/pdfjs-4.2.67-dist" zoom="page-fit"  ></pdfjs-viewer-element>
              </div>
              <div className="flex flex-col gap-y-4 w-[31%] ">
                <div className="bg-[#f89f76] h-[49%] rounded-[25px] shadow-lg sho ">
                  <h1 className='text-center text-white font-bold text-[30px] p-4' >
                    Timer
                  </h1>
                  <div className=""><Timer/></div>
                </div>
                <div className="bg-[#AEBCDA] h-[49%] rounded-[25px]">
                <h1 className='text-center text-white font-bold text-[30px] p-4' >
                    Dictionary
                  </h1>
                  <Dictionary/>
                </div>
              </div>
            </div>
            </MainPage>
  )
}
