import React, { useState, type JSX } from 'react';
import './App.scss';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

const App: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (searchTerm: string): void => {
    console.log(searchTerm);

    setSearch(searchTerm);
  };

  const handleSearchClick = () => {
    console.log('click on button near the search');
  };

  return (
    <div>
      <Search searchStr={search} handleButtonClick={handleSearchClick} handleInputChange={handleChange} />
      <CardList />
    </div>
  );
};

export default App;
