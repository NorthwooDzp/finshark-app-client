import Card from "../Card/Card";
import "./CardList.scss";

// interface CardListProps {}

const CardList = () => {
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
