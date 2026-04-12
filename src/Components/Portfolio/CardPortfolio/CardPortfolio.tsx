import React, { type JSX } from 'react';
import { usePortfolio } from '../../../context/Portfolio.context';

interface CardPortfolioProps {
  value: string;
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({ value }): JSX.Element => {
  const { removeFromPortfolio } = usePortfolio();
  return (
    <div>
      {value} <button onClick={() => removeFromPortfolio(value)}> &times;</button>
    </div>
  );
};

export default CardPortfolio;
