import React from "react";
import Card from "./Card";
import "./../App.css";

const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
        //Con monster=monster le estamos pasando la propiedad al hijo
      ))}
    </div>
  );
};

export default CardList;
