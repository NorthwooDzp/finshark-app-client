import React, { useState, type JSX } from 'react';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import type { CompanySearch } from './models';
import { searchCompanies } from './api';
import './App.scss';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import PortfolioProvider from './context/Portfolio.provider';
import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';

const App: React.FC = (): JSX.Element => {
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleSearch = (term: string) => {
    if (!term) {
      return;
    }
    searchCompanies(term)
      .then((res) => {
        setServerError('');
        setSearchResult(res);
      })
      .catch((err: Error) => {
        setServerError(err.message);
      });
  };

  return (
    <>
      <PortfolioProvider>
        <Navbar />
        {/* <Hero /> */}
        <Search handleSearch={handleSearch} />
        <ListPortfolio />
        {/* {(() => {
        if (serverError) {
          return <h3>{serverError}</h3>;
          } else if (!searchResult.length) {
            return <h3>No results found, please change the search term</h3>;
            } else {
          return <CardList companies={searchResult} />;
      }
      })()} */}

        {serverError ? <h3>{serverError}</h3> : <CardList companies={searchResult} />}

        {/* {serverError && <h3>{serverError}</h3>}
      {!serverError && (
        <>
        {searchResult.length && <CardList companies={searchResult} />}
        {!searchResult.length && <h4>No results found, please change the search term</h4>}
        </>
        )} */}
      </PortfolioProvider>
    </>
  );
};

export default App;
