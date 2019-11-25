'use strict';

const anagrammer = require('../anagrammer/anagrammer.js');

describe('Anagram tests', () => {
  it('returns a viable anagram', () => {
    expect(anagrammer('cat').includes('tac')).toBeTruthy();
  })
  it('returns all valid anagrams', () => {
    const hosegrams = anagrammer('hose');
    expect(
      hosegrams.includes('shoe')
      &&
      hosegrams.includes('hoes')
    ).toBeTruthy()
  })
  it('returns partial words', () => {
    const partialCheck = anagrammer('catapult');
    console.log(partialCheck)
  })
})