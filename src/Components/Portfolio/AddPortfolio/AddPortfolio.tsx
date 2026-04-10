import React, { type JSX, type SyntheticEvent } from 'react';

interface AddPortfolioProps {
  symbol: string;
  onPortfolioCreate: () => void;
}

const AddPortfolio: React.FC<AddPortfolioProps> = ({ symbol, onPortfolioCreate }): JSX.Element => {
  const portfolioCreateHandler: (e: SyntheticEvent) => void = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log('Creating portfolio', e);

    onPortfolioCreate();
  };
  return (
    <form onSubmit={portfolioCreateHandler}>
      <input type="text" readOnly={true} hidden={true} value={symbol} />
      <button type="submit">Create Portfolio</button>
    </form>
  );
};

export default AddPortfolio;
