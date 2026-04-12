import React, { type JSX } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import type { CompanySearch } from '../../models';

interface CardListProps {
  companies: CompanySearch[];
  onPortfolioCreate: (value: string) => void;
}

const CardList: React.FC<CardListProps> = ({ companies, onPortfolioCreate }): JSX.Element => {
  return (
    <div className="card-list">
      {companies.map((company) => (
        <Card key={company.symbol} company={company} onPortfolioCreate={onPortfolioCreate} />
      ))}
    </div>
  );
};

export default CardList;
