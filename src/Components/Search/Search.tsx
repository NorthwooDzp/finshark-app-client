import React, { useRef, type JSX, type SyntheticEvent } from 'react';

interface SearchProps {
  handleSearch: (val: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearch }): JSX.Element => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleSearch(inputEl.current?.value ?? '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputEl} type="text" placeholder="Type name and press Enter" />
      <input type="submit" hidden={true} />
    </form>
  );
};

export default Search;
