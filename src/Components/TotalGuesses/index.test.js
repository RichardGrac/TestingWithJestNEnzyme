import {TotalGuesses} from './index'
import {mount} from 'enzyme'
import {findByTestAttr} from '../../../test/testUtils'
import React from 'react'
import {GuessedWordsProvider} from '../../context/GuessedWordsContext'
import languageContext from '../../context/LanguageContext'

describe('Total Guesses tests', () => {

    let wrapper

    beforeEach(() => {
        const props = {
            guessedWords: [
                {guessedWord: 'Attempt 1', letterMatchCount: 2},
                {guessedWord: 'Attempt 2', letterMatchCount: 2},
                {guessedWord: 'Attempt 3', letterMatchCount: 2},
            ]
        }
        wrapper = mount(
            <languageContext.Provider value={'en'}>
                <GuessedWordsProvider value={[props.guessedWords, jest.fn()]}>
                    <TotalGuesses {...props} />
                </GuessedWordsProvider>
            </languageContext.Provider>
        )
    })

    test('It renders correctly', () => {
        const totalGuessesComponent = findByTestAttr(wrapper, 'total-guesses-component')
        expect(totalGuessesComponent.length).toBe(1)
    })

    test('It should display the correct number of attempts', () => {
        const numberOfGuesses = findByTestAttr(wrapper, 'guess-count')
        expect(numberOfGuesses.text()).toContain('3')
    })
})
