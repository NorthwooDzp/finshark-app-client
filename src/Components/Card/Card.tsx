import React, { useCallback, type JSX } from 'react';
import './Card.scss';
import type { CompanySearch } from '../../models';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface CardProps {
  company: CompanySearch;
  onPortfolioCreate: () => void;
}

const Card: React.FC<CardProps> = ({ company, onPortfolioCreate }): JSX.Element => {
  const getRandomPrice: () => number = useCallback(() => Math.round(Math.random() * 10000), []);

  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Image"
      />
      <div className="details">
        <h2>
          {company.name} ({company.symbol})
        </h2>
        <p>${getRandomPrice()}</p>
      </div>
      <p className="info">
        {company.exchangeFullName} - {company.exchange} - {company.currency}
      </p>
      <>
        <AddPortfolio symbol={company.symbol} onPortfolioCreate={onPortfolioCreate} />
      </>
    </div>
  );
};

export default Card;
