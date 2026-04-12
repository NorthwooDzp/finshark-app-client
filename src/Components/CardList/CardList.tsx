import React, { type JSX } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import type { CompanySearch } from '../../models';
import { usePortfolio } from '../../context/Portfolio.context';

interface CardListProps {
  companies: CompanySearch[];
}

const CardList: React.FC<CardListProps> = ({ companies }): JSX.Element => {
  const { addToPortfolio } = usePortfolio();

  return (
    <div className="card-list">
      {companies.map((company) => (
        <Card key={company.symbol} company={company} onPortfolioCreate={addToPortfolio} />
      ))}
    </div>
  );
};

export default CardList;
