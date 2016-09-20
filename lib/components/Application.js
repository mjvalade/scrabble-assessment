import React, { Component } from 'react';

const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
};

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      score: 0
    };
  }

  scoreWord(word = this.state.word) {
    let score;
    // .trim() to get rid of excess whitespace of word
    // let newWord = word.trim();
    if ( word === '' || word === null) {
      score = 0;
    } else {
      score = word.split('').reduce((score, char) => {
        let upperCase = char.toUpperCase();
        return letterScores[upperCase] + score;
      }, 0);
    }

    // if block for taking second argument
    this.setState({score});
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
          onClick={() => this.scoreWord()}>
          Click here
        </button>
      </div>
    );
  }
}
