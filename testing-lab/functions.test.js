const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('Should be 2', () => {
    expect(returnTwo()).toBe(2)
})

test('Should be Hello, James/Jill', () => {
    expect(greeting('James')).toBe('Hello, James')
    expect(greeting('Jill')).toBe('Hello, Jill')
})

describe('mathFunctions', () => {
    test('Should be 3', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })
    test ('Should be 15/12', () => {
        expect(multiply(3, 5)).toBe(15)
        expect(multiply(2, 6)).toBe(12)
    })
    test ('Should be 5/10', () => {
        expect(divide(25, 5)).toBe(5)
        expect(divide(100, 10)).toBe(10)
    })
    test ('Should be 20/90', () => {
        expect(subtract(23, 3)).toBe(20)
        expect(subtract(99, 9)).toBe(90)
    })
})