import React, { useCallback, type JSX } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import type { CompanySearch } from '../../models';

interface CardListProps {
  companies: CompanySearch[];
}

const CardList: React.FC<CardListProps> = ({ companies }): JSX.Element => {
  const getRandomPrice: () => number = useCallback(() => Math.round(Math.random() * 10000), []);

  return (
    <div className="card-list">
      {companies.map((comapny) => (
        <Card
          key={comapny.symbol}
          companyName={comapny.exchangeFullName}
          price={getRandomPrice()}
          ticker={comapny.symbol}
        />
      ))}
    </div>
  );
};

export default CardList;
