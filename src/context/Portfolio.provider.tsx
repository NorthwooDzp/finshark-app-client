import React, { useState } from 'react';
import { PortfolioContext } from './Portfolio.context';

const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const removeFromPortfolio = (value: string): void => {
    setPortfolioValues((prev) => prev.filter((el) => el !== value));
  };

  const addToPortfolio: (value: string) => void = (value: string) => {
    setPortfolioValues((prev) => Array.from(new Set([...prev, value])));
  };

  return (
    <PortfolioContext value={{ portfolioValues, addToPortfolio, removeFromPortfolio }}>
      {children}
    </PortfolioContext>
  );
};

export default PortfolioProvider;
