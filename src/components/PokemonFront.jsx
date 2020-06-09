// Componente que vai disparar o evento

import React, { Component } from "react";
import Card from "./Card";

export default class PokemonFront extends Component {
  render() {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
    return (
      <Card title="Front" alt={this.props.id} green>
      <img src={url} alt={1}/>
      </Card>
    )
  }
}
