import React from "react";
import CardList from "./components/CardList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state; //Pasamos el estado a constantes, queda más bonico
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      // <div className="App">
      //   <CardList name="Sara" />
      //   {this.state.monsters.map(monster => (
      //     <h1 key={monster.id}>{monster.name}</h1>
      //   ))}
      // </div>
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//El fetch se puede hacer en componentDidMount
//this.state en constructor es un array vacío y es lo que pasamos a los hijos
//En el fetch le decimos que ese array es users

//input -> e.target sería el input, e.target.value es lo que escribimos
//this.setState no ocurre de manera inmediata, es asíncrono, para que lo consolee a la vez que escribimos, tenemos que consolear en un método dentro de setState

export default App;
