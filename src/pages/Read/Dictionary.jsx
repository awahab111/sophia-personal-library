import React, { useState } from 'react';
import axios from 'axios';

function Dictionary() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleInputChange = (event) => {
    setWord(event.target.value);
  }

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      setDefinition('Word not found');
    }
  }

return (
    <div className='flex flex-col gap-5 lg:gap-20 p-5 '>
        <div className='flex items-center justify-center h-[25%] w-full p-1'>
            <input type="text" value={word} onChange={handleInputChange} className='p-2 rounded-l-lg w-[85%] h-[90%] shadow-xl' placeholder="Enter a word" />
            <button className='flex p-[10px] rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 shadow-xl ' onClick={handleSearchClick}>
                <i className='fa fa-search mr-1 '></i>
            </button>
        </div>
        <div className='flex flex-col gap-10 h-[50%] text-lg lg:text-xl text-gray-100'>
            {definition}
        </div>
    </div>
);
}

export default Dictionary;