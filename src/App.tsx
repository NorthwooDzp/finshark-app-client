import React, { useEffect, useState, type JSX } from 'react';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import type { CompanySearch } from './models';
import { searchCompanies } from './api';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  useEffect(() => {
    if (!search) {
      return;
    }
    searchCompanies(search)
      .then((res) => {
        setServerError('');
        setSearchResult(res);
      })
      .catch((err: Error) => {
        setServerError(err.message);
      });
  }, [search]);

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
            <CardList companies={searchResult} />
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
