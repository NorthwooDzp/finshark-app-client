import React, { useState } from 'react';
import { PortfolioContext } from './Portfolio.context';

interface PortfolioProviderProps {
  children: React.ReactNode;
}

const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
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
