import React, { useEffect, type JSX } from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import { searchCompanies } from '../../api';

// interface CardListProps {}

const CardList: React.FC = (): JSX.Element => {
  useEffect(() => {
    searchCompanies('tsla').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="card-list">
      <Card companyName="Apple" price={456} ticker="APPL" />
      <Card companyName="Microsoft" price={654} ticker="MSFT" />
      <Card companyName="Amazon" price={482} ticker="AMZ" />
      <Card companyName="Google" price={965} ticker="GGL" />
      <Card companyName="Tesla" price={1057} ticker="TSLA" />
    </div>
  );
};

export default CardList;
