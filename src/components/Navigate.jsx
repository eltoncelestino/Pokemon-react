// Componente que vai disparar o evento

import React, { Component } from "react";
import Card from "./Card";

import "./Navigate.css";

export default class Navigate extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id };
  }

  next() {
    const id = this.state.id + 1 > 649 ? this.state.id : this.state.id + 1;
    this.setState({ id })

    // quando o estado é modificado, o comp filho avisa para o comp pai, que avisa aos irmãos
    this.props.setId(id)
  }

  previous() {
    const id = this.state.id - 1 < 1 ? this.state.id : this.state.id - 1;
    this.setState({ id })

    this.props.setId(id)
  }

  sum10() {
    const id = this.state.id + 10 > 649 ? 649 : this.state.id + 10;
    this.setState({ id })

    this.props.setId(id)
  }

  sub10() {
    const id = this.state.id - 10 < 1 ? 1 : this.state.id - 10;
    this.setState({ id })

    this.props.setId(id)
  }

  render() {
    return (
      <Card title="ID Pokémon" yellow>
        <div className="navigate">
          <button className="btn btn-outline-dark" onClick={() => this.sub10()}>
            -10
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => this.previous()}
          >
            Previous
          </button>
          <button className="btn btn-outline-dark" onClick={() => this.next()}>
            Next
          </button>
          <button className="btn btn-outline-dark" onClick={() => this.sum10()}>
            +10
          </button>

          <input value={this.state.id} readOnly />
        </div>
      </Card>
    );
  }
}
