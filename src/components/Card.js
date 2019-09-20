import React from "react";
// import CardList from "./CardList";

import "./../App.css";

const Card = props => {
  console.log(props);
  return (
    <div className="card-container">
      <h1>{props.monster.name}</h1>
    </div>
  );
};

export default Card;

//Si consoleamos props nos muestra cada monster (ya mapeado)
