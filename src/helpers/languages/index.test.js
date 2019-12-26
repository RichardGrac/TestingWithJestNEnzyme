import stringsModule from './index'

describe('Language tests', () => {
    const warnMock = jest.fn()
    beforeEach(() => {
        console.warn = warnMock
    })

    afterEach(() => {
        console.warn = require('console').warn
    })

    test('It should display the correct guessPrompt message in EN', () => {
        expect(stringsModule('en', 'guessPrompt'))
            .toBe('Try to guess the secret word!')
    })

    test('It should display the correct guessPrompt message in ES', () => {
        expect(stringsModule('es', 'guessPrompt'))
            .toBe('Intenta adivinar la palabra secreta!')
    })

    test('It should display the Congrats message in English when Language does not exist', () => {
        expect(stringsModule('test', 'congrats'))
            .toBe('Congratulations! You guessed the word')
        expect(warnMock).toHaveBeenCalledTimes(1)
    })
})
