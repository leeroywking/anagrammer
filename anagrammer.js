'use strict';

const anagrammer = function (word) {
  const wordList = [];
  const splitWord = word.split('');

  const recurse = function (splitWord, partial = []) {
    for (let idx = 0; idx < splitWord.length; idx++) {
      const savePartial = [...partial]
      partial.push(splitWord[idx])
      const newSplitWord = [...splitWord.slice(0, idx), ...splitWord.slice(idx + 1)];
      if (newSplitWord.length) { recurse(newSplitWord, partial); }
      else {
        wordList.push(partial.join(''));
      }
      partial = [...savePartial]
    }
  }
  recurse(splitWord)
  console.log(wordList);
  return wordList
}

anagrammer('elepe')