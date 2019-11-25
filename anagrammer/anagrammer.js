'use strict';

const masterTree = require('../autocomplete/wordTree.js')

const anagrammer = function (word) {
  let wordList = [];
  const splitWord = word.split('');

  const recurse = function (splitWord, partial = []) {
    for (let idx = 0; idx < splitWord.length; idx++) {
      const savePartial = [...partial]
      partial.push(splitWord[idx])
      const newSplitWord = [...splitWord.slice(0, idx), ...splitWord.slice(idx + 1)];
      if (newSplitWord.length && masterTree.isViable(partial.join(''))) { recurse(newSplitWord, partial); }
      else {
        wordList.push(partial.join(''));
      }
      partial = [...savePartial]
    }
  }
  recurse(splitWord)
  wordList = wordList.filter(word => masterTree.isWord(word))
  return wordList
}

module.exports = anagrammer