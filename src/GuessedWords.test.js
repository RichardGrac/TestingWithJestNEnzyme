import React from 'react'
import {setUp, findByTestAttr, checkProps} from '../test/testUtils'

import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ]
}

test('does not throw warning with expected props', () => {
    // setUp(GuessedWords, {guessedWords: [...defaultProps.guessedWords]})
    checkProps(GuessedWords, defaultProps, 'guessedWords')
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setUp(GuessedWords, {guessedWords: []})
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'guessedWords-component')
        expect(component.length).toBe(1)
    })

    test('renders instructions to guess a word', () => {
        const component = findByTestAttr(wrapper, 'instructions')
        expect(component.length).toBe(1)
    })

})

describe('if there are words guessed', () => {

    let wrapper
    beforeEach(() => {
        wrapper = setUp(GuessedWords, defaultProps)
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'guessedWords-component')
        expect(component.length).toBe(1)
    })

    test('renders attempted words', () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'attempts')
        expect(guessedWordsComponent.length).toBe(1)
    })

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-nodes')
        expect(guessedWordsNodes.length).toBe(defaultProps.guessedWords.length)
    })
})
