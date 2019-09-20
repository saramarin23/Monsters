import React from "react";
import CardList from "./components/CardList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      // <div className="App">
      //   <CardList name="Sara" />
      //   {this.state.monsters.map(monster => (
      //     <h1 key={monster.id}>{monster.name}</h1>
      //   ))}
      // </div>
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

//El fetch se puede hacer en componentDidMount
//this.state en constructor es un array vacío
//En el fetch le decimos que ese array es users

export default App;
