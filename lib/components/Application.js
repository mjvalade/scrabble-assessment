import React, { Component } from 'react';
import scoreWord from '../score-word';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      score: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.score}</p>
        <input
          type="text"
          placeholder="Type Word..."
          onChange={(e) => this.setState({ word: e.target.value })}
        />
        <button
          onClick={() => this.setState({ score: scoreWord(this.state.word) })}>
          Submit
        </button>
      </div>
    );
  }
}
