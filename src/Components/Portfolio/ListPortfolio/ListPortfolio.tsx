import React, { type JSX } from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface ListPortfolioProps {
  portfolioValues: string[];
}

const ListPortfolio: React.FC<ListPortfolioProps> = ({ portfolioValues }): JSX.Element => {
  return (
    <>
      <h3>My Portfolio:</h3>
      <ul>
        {portfolioValues.map((value) => (
          <li key={value}>
            <CardPortfolio value={value} />{' '}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListPortfolio;
