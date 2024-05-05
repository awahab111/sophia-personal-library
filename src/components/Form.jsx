const FormLabel = ({name}) => {
    return (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 ">
            {name}
        </label>
    )
}

const FormInput = ({name, type}) => {
    return (
        <input
            type={type}
            name={name}
            id={name}
            autoComplete={name}
            className="mt-1 mb-2 p-[10px] block w-full shadow-sm sm:text-sm border-[#DCD9D9] border-[1px] rounded-md"
        />
    )
}

const FormButton = ({name}) => {
    return (
        <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-[#4D4D4D] 
            transition-colors duration-150 bg-[#AEBCDA] border border-transparent rounded-lg
            active:bg-blue-600 hover:bg-white hover:border-[#AEBCDA] hover:text-[#4D4D4D] focus:outline-none focus:shadow-outline-blue">                                    
            {name}
        </button>
    )
}

export { FormLabel, FormInput, FormButton };
