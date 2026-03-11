import React, { useState, type ChangeEvent, type MouseEvent, type JSX, useRef } from 'react';

const Search: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    if (inputEl.current) {
      setSearch(inputEl.current.value);
      console.log('set value');
    }
  };

  return (
    <div>
      <input ref={inputEl} type="text" value={search} onChange={handleChange} />
      <button onClick={handleClick}>{'->'}</button>
    </div>
  );
};

export default Search;
