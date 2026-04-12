import React, { type JSX } from 'react';

interface CardPortfolioProps {
  value: string;
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({ value }): JSX.Element => {
  return <div>{value}</div>;
};

export default CardPortfolio;
