const { assert } = require('chai');
const scoreWord = require('../lib/score-word');

describe('scoreWord', () => {

  it('should be a function', () => {
    assert.isFunction(scoreWord);
  });

  it('should take "hello" and return 8', () => {
    assert.equal(scoreWord("hello"), 8);
  });

  it('should take an empty string and return 0', () => {
    assert.equal(scoreWord(""), 0);
  });

  it('should take null and return 0', () => {
    assert.equal(scoreWord(null), 0);
  });

  it('should ignore whitespace and return 8', () => {
    assert.equal(scoreWord(" hello "), 8);
  });

  it('should take a default value of multiplier and multiply the score by that number', () => {
    assert.equal(scoreWord("hello", 2), 16);
  });


});
