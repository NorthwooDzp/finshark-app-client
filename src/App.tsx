import React, { type JSX } from 'react';
import './App.scss';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Search />
      <CardList />
    </div>
  );
};

export default App;
