import React, { useState, useEffect } from 'react';
import { getCurrentDate, getCurrentTime } from "@/utils/dateTime";

function DateTime() {
  const [date, setDate] = useState(getCurrentDate());
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getCurrentDate());
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-[25%] bg-white my-4 rounded-[25px] shadow-md select-none">
      <div className="flex w-[50%]">
        <i className="far fa-calendar-alt my-auto mx-5 text-[#F76B56]"></i>
        <p className="my-auto text-[18px] font-digital">{date}</p>
      </div>
      <div className="flex w-[50%]">
        <i className="far fa-clock my-auto mx-5 text-[#F76B56]"></i>
        <p className="my-auto text-[18px] font-digital">{time}</p>
      </div>
    </div>
  );
}

export default DateTime;