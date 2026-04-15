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
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-dark-blue  rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={handleSubmit}
        >
          <input
            id="search-input"
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none bg-white"
            ref={inputEl}
            type="text"
            placeholder="Type name and press Enter"
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
