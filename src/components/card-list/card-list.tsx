import * as React from "react";
import Card from "../card/card";

type Props = {};

const CardList: React.FC<Props> = props => {
  return (
    <div>
      <h1>Card List</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
