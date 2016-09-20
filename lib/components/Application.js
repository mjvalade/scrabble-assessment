import React, { Component } from 'react';
import scoreWord from '../score-word';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      score: 0,
      wordArray: []
    };
  }

  handleChange(e) {
    this.setState({ word: e.target.value });
    this.setState({ score: scoreWord(this.state.word)});
  }

  clearCurrentWord() {
    this.setState({ word: '' });
    this.setState({ score: 0 });
  }

  updateWordArray() {
    this.setState({ wordArray:  this.state.wordArray.concat(this.state.word)});
  }

  render() {
    return (
      <div>
      <input
      type="text"
      value={this.state.word}
      placeholder="Type Word..."
      onChange={(e) => this.handleChange(e)}
      />
      <p>Score {this.state.score}</p>
        <button
          onClick={() => this.updateWordArray()}
          >
          Submit
        </button>
        <button
          onClick={() => this.clearCurrentWord()}>
          Clear
        </button>
        <ul>
          <li>{this.state.wordArray.length}</li>
        </ul>
      </div>
    );
  }
}
