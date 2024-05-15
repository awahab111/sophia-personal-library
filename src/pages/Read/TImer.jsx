import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    } else if (seconds === 0) {
      // toast.success("Time's up!");
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setSeconds(event.target.value);
  }

  const handleStartClick = () => {
    setIsRunning(true);
  }

  const handleStopClick = () => {
    setIsRunning(false);
  }

  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

  return (
    <div className='flex flex-col items-center justify-center lg:gap-2 h-[50%] w-[100%]' >
      <div className='h-[20%] ' >
          <select value={selectedTime} onChange={handleTimeChange} className='p-2 rounded-md shadow-lg'>
            <option value="0">Select time</option>
            <option value="300">5 minutes</option>
            <option value="900">15 minutes</option>
            <option value="1500">25 minutes</option>
            <option value="3000">50 minutes</option>
          </select>
      </div>
      <div className='text-white h-[70%] font-bold font-digital text-[30px] lg:text-[72px]'>
        {minutes} : {remainingSeconds}
      </div>
      <div className='flex gap-4'>
        <button className="hover:bg-white bg-[#76CFF8] ring-[#76CFF8] ring-1 text-white hover:text-[#76CFF8] font-medium text-sm rounded-[10px] p-3 shadow-xl hover:shadow-[#76CFF8] " onClick={handleStartClick}>Start</button>
        <button className="hover:bg-white bg-[#ff6464] ring-[#ff6464] ring-1 text-white hover:text-[#ff6464] font-medium text-sm rounded-[10px] p-3 shadow-xl hover:shadow-[#ff6464]" onClick={handleStopClick}>Stop</button>
      </div>
    </div>
  );
}

export default Timer;