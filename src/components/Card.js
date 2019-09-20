import React from "react";
// import CardList from "./CardList";

import "./../App.css";

const Card = props => {
  //   console.log(props);
  return (
    <div className="card-container">
      <img
        className="monster-pic"
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set1`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;

//Si consoleamos props nos muestra cada monster (ya mapeado)
//Las imágenes las hemos cogido de otra api en este caso
