import React, { useRef, type ChangeEvent, type JSX } from 'react';

interface SearchProps {
  searchStr: string;
  handleInputChange: (val: string) => void;
  handleButtonClick: () => void;
}

const Search: React.FC<SearchProps> = ({ searchStr, handleInputChange, handleButtonClick }): JSX.Element => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input
        ref={inputEl}
        type="text"
        value={searchStr}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
      />
      <button onClick={handleButtonClick}>&rarr;</button>
    </div>
  );
};

export default Search;
