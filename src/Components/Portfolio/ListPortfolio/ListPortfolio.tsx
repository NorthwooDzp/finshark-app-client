import React, { type JSX } from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { usePortfolio } from '../../../context/Portfolio.context';

const ListPortfolio: React.FC = (): JSX.Element => {
  const { portfolioValues } = usePortfolio();

  return (
    <>
      <h3>My Portfolio:</h3>
      <ul>
        {portfolioValues.map((value) => (
          <li key={value}>
            <CardPortfolio value={value} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListPortfolio;
