'use strict';

const masterTree = require('../autocomplete/wordTree.js');

describe('autocomplete tests', () => {
    it('Can find a word exists', () => {
        expect(masterTree.isWord('cat')).toBeTruthy()
    });
    it('can eliminate a non-word', () => {
        expect(masterTree.isWord('aszxckljva')).toBeFalsy()
    })
    it('correct reports nonsense as nonViable', () => {
        expect(masterTree.isViable('aszxckljva')).toBeFalsy()
    })
    it('corrently reports a viable word start', () => {
        expect(masterTree.isViable('cata')).toBeTruthy()
    })
    it('returns some words from a viable beginning', () => {
        const results = masterTree.returnWordsFromPartial('anagra', 10);
        expect(results.includes('anagram')).toBeTruthy()
    })
    it('returns some words from a viable beginning', () => {
        const results = masterTree.returnWordsFromPartial('catp', 10);
        expect(results.includes('catpiece')).toBeTruthy()
    })
    it('correct reports nonsense as nonViable', () => {
        const viableCatp = masterTree.isViable('catpu')
        expect(viableCatp).toBeFalsy()
    })
})