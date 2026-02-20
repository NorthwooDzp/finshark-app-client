import Card from "../Card/Card";
import "./CardList.scss";

interface CardListProps {}

const CardList = () => {
  return (
    <div className="card-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
