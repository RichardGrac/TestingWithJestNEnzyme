import React, {useContext} from 'react'
import {setUp, findByTestAttr, checkProps, setUpWithContextPattern} from '../../../test/testUtils'
import languageContext from '../../context/LanguageContext'

import GuessedWords from './GuessedWords'
import getStringByLanguage from '../../helpers/languages'
import {GuessedWordsProvider} from '../../context/GuessedWordsContext'
import {mount} from 'enzyme'
import {GuessedWordsContext} from '../../context/GuessedWordsContext'

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
    const providerValue = [[], jest.fn()]

    beforeEach(() => {
        wrapper = setUpWithContextPattern(GuessedWords, GuessedWordsProvider, providerValue)
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
    const providerValue = [[...defaultProps.guessedWords], jest.fn()]

    beforeEach(() => {
        wrapper = setUpWithContextPattern(GuessedWords, GuessedWordsProvider, providerValue)
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

describe('Language context for GuessedWords', () => {

    let wrapper

    test('Guess prompt in ES', () => {
        wrapper = mount(
            <languageContext.Provider value={'es'}>
                <GuessedWordsContext.Provider value={[[], jest.fn()]}>
                    <GuessedWords />
                </GuessedWordsContext.Provider>
            </languageContext.Provider>
        )

        const component = findByTestAttr(wrapper, 'guessedWords-component')
        expect(component.text())
            .toContain(getStringByLanguage('es', 'guessPrompt'))
    })

    test('Guessed Words in ES', () => {
        wrapper = mount(
            <languageContext.Provider value={'es'}>
                <GuessedWordsContext.Provider value={[[...defaultProps.guessedWords], jest.fn()]}>
                    <GuessedWords />
                </GuessedWordsContext.Provider>
            </languageContext.Provider>
        )

        const component = findByTestAttr(wrapper, 'guess-column-header')
        expect(component.text())
            .toContain(getStringByLanguage('es', 'guessTableHeader'))
    })
})
