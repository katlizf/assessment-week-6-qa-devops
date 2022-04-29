const {shuffleArray} = require('./utils')
let testArr = [1, 2, 3, 4]


describe('shuffleArray should', () => {
    // test('be an array', () => {
    //     expect(typeof shuffleArray).toBe('array')
    // })
    // test('the same length', () => {
    //     expect(shuffleArray.length).toEqual(10)
    // })
    
    test('check if shuffleArray returns an array', ()=> {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    test('check if shuffleArray is the same length', () => {
        expect(shuffleArray(testArr)).toHaveLength(4)
    })

    test('check if all same items in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
    
    test('check items have been shuffled', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join)
    })
})