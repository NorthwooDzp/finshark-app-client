import "./Card.scss";

interface CardProps {
  companyName: string;
  price: number;
  ticker: string;
}

const Card = ({ companyName, price, ticker }: CardProps) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Image"
      />
      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, at?</p>
    </div>
  );
};

export default Card;
