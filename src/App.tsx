import type React from "react";
import "./App.scss";
import CardList from "./Components/CardList/CardList";
import type { JSX } from "react";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <CardList />
    </div>
  );
};

export default App;
