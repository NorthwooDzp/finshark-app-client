import React, { type JSX, type SyntheticEvent } from 'react';
import { usePortfolio } from '../../../context/Portfolio.context';

interface AddPortfolioProps {
  symbol: string;
}

const AddPortfolio: React.FC<AddPortfolioProps> = ({ symbol }): JSX.Element => {
  const { addToPortfolio } = usePortfolio();

  const portfolioCreateHandler: (e: SyntheticEvent) => void = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Creating portfolio', e);

    addToPortfolio(symbol);
  };
  return (
    <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
      <form onSubmit={portfolioCreateHandler}>
        <input type="text" readOnly={true} hidden={true} value={symbol} />
        <button
          className="p-2 px-8 text-white bg-dark-blue rounded-lg hover:opacity-70 focus:outline-none"
          type="submit"
        >
          Add to Portfolio
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
