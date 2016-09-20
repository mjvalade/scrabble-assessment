const assert = require('chai').assert;
const App = require('../lib/components/Application.js');

describe('The test bundle', function() {
  it('should be connected', function() {
    assert(true);
  });
});

describe('The scoreWord function', function() {
  it('should return 0 if word === ""', function() {
    App.word = "";

    App.scoreWord(App.word);
    assert.equal(App.word, 0);
  });

  it('should take a word and convert it to a number', function() {
    // App.word = 'hello';

    App.scoreWord('hello');
    assert.equal(App.score, 8);
  });

  xit('should take a word from the input field', function() {

    assert(true);
  });


});
