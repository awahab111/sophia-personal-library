import {getCurrentDate, getCurrentTime} from "@/utils/dateTime";

function DateTime () {
//   return <div>{new Date().toLocaleString()}</div>;
  return (
    <div className="flex w-[25%] h-[4%] bg-white mx-auto my-4 rounded-[25px] shadow-md">
        <div className="flex w-[50%]">
            <i className="far fa-calendar-alt my-auto mx-5 text-[#F76B56]"></i>
            <h1 className="my-auto">{getCurrentDate()}</h1>
        </div>
        <div className="flex w-[50%]">
            <i className="far fa-clock my-auto mx-5 text-[#F76B56]"></i>
            <h1 className="my-auto">{getCurrentTime()}</h1>
        </div>

    </div>
);
}

export default DateTime;