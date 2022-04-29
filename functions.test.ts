const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('be an array', () => {
        expect(typeof shuffleArray).toBe('array')
    }),
    test('the same length', () => {
        expect(shuffleArray.length).toEqual(10)
    })
})