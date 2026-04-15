import React, { type JSX } from 'react';
import { usePortfolio } from '../../../context/Portfolio.context';

interface DeletePortfolioProps {
  value: string;
}

const DeletePortfolio: React.FC<DeletePortfolioProps> = ({ value }): JSX.Element => {
  const { removeFromPortfolio } = usePortfolio();
  return (
    <button
      className="block w-full py-0.5 text-4xl text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
      onClick={() => {
        removeFromPortfolio(value);
      }}
    >
      &times;
    </button>
  );
};

export default DeletePortfolio;
