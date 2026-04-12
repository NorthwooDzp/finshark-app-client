import { createContext, use } from 'react';

interface PortfolioContextType {
  portfolioValues: string[];
  addToPortfolio: (val: string) => void;
  removeFromPortfolio: (val: string) => void;
}

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const usePortfolio: () => PortfolioContextType = () => {
  const context: PortfolioContextType | null = use(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio hook should be used inside PortfolioProvider');
  }

  return context;
};
