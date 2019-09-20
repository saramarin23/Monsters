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

//Este es un componente funcional
//Si logueamos en la línea 4 props, nos muestra un objeto vacío xq en App -> <CardList /> no le pasamos ningún parámetro, pero si en vez de eso escribimos <CardList name="Sara" /> nos loguea Sara.
//Children prop sería lo que le pasamos entre el componente: <CardList>Hola<CardList> y en CardList {props.children}

//Esto lo hemos traido de App.js y hemos cambiado this.state.monsters.map por props.monsters.map xq ya no está en el estado sino en la propiedad que le pasamos

//Antes de crear el componente Card, para ver que funcionara todo aquí, dentro del div estaba: {props.monsters.map(
//   monster => (
//     <h1 key={monster.id}>{monster.name}</h1>
//   )
// )}
