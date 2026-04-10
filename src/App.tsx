import React, { useState, type JSX } from 'react';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import type { CompanySearch } from './models';
import { searchCompanies } from './api';
import './App.scss';

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

  const onPortfolioCreate: () => void = () => {};

  return (
    <div>
      <Search handleSearch={handleSearch} />
      {/* {(() => {
        if (serverError) {
          return <h3>{serverError}</h3>;
        } else if (!searchResult.length) {
          return <h3>No results found, please change the search term</h3>;
        } else {
          return <CardList companies={searchResult} />;
        }
      })()} */}

      {serverError ? (
        <h3>{serverError}</h3>
      ) : (
        <>
          {searchResult.length ? (
            <CardList companies={searchResult} onPortfolioCreate={onPortfolioCreate} />
          ) : (
            <h4>No results found, please change the search term</h4>
          )}
        </>
      )}

      {/* {serverError && <h3>{serverError}</h3>}
      {!serverError && (
        <>
          {searchResult.length && <CardList companies={searchResult} />}
          {!searchResult.length && <h4>No results found, please change the search term</h4>}
        </>
      )} */}
    </div>
  );
};

export default App;
