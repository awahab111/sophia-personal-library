

function Button({text}){
    return(
        <button className="bg-white hover:ring-1 ring-[#f89f76] text-black font-normal text-sm py-2 px-4 rounded-full shadow-lg w-32">
            {text}
        </button>
    )
}

export default Button;