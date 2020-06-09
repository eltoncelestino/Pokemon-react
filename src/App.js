import React, { Component } from "react";

import "./App.css";

import Navigate from "./components/Navigate";
import PokemonFront from "./components/PokemonFront";
import PokemonBack from "./components/PokemonBack";
import PokemonInfo from "./components/PokemonInfo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 25 };

    this.setId = this.setId.bind(this)
  }

  setId(newId){
    this.setState({id: newId})
  }

  render() {
    return (
      <div className="container">
      
        <h1 className="text-muted">Minicurso React</h1>
        <div className="line">
          <Navigate id={this.state.id} setId={this.setId}/>
        </div>
        <div className="line">
          <PokemonFront id={this.state.id}/>
          <PokemonBack id={this.state.id}/>
          <PokemonInfo id={this.state.id}/>
        </div>
      </div>
    );
  }
}
