import React, { type JSX } from 'react';
import './Card.scss';
import type { CompanySearch } from '../../models';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface CardProps {
  company: CompanySearch;
}

const Card: React.FC<CardProps> = ({ company }): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
      <h2 className="font-bold text-center text-violet-950 md:text-left">
        {company.name} ({company.symbol})
      </h2>
      <p className="text-blue-950">{company.currency}</p>
      <p className="font-bold text-blue-800">
        {company.exchangeFullName} - {company.exchange}
      </p>
      <AddPortfolio symbol={company.symbol} />
    </div>
  );
};

export default Card;
