function Button({text, onClick}){
    return(
        <button onClick={onClick} className="bg-white hover:ring-1 ring-[#f89f76] text-black font-normal text-sm py-2 px-4 rounded-full shadow-lg whitespace-nowrap">
            {text}
        </button>
    )
}

export default Button;