import React from 'react'

import Congrats from './Congrats'
import {
    checkProps,
    findByTestAttr,
    setUpWithContextPatternAndGuessWordsProvider,
} from '../../../test/testUtils'
import {mount} from 'enzyme'
import languageContext from '../../context/LanguageContext'
import getStringByLanguage from '../../helpers/languages'
import {SuccessProvider} from '../../context/SuccessContext'
import {GuessedWordsContext} from '../../context/GuessedWordsContext'

const guessWordsProviderValue = [[], jest.fn()]

describe('Congrats tests', () => {
    const providerValue = [false, jest.fn()]

    test('renders without error', () => {
        const wrapper = setUpWithContextPatternAndGuessWordsProvider(Congrats, SuccessProvider, providerValue, guessWordsProviderValue)
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.length).toBe(1)
    })

    test('renders no text when `success` context value is false', () => {
        const wrapper = setUpWithContextPatternAndGuessWordsProvider(Congrats, SuccessProvider, providerValue, guessWordsProviderValue)
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.text().length).toBe(0)
    })

    test('renders non-empty congrats message when `success` context value is true', () => {
        const wrapper = setUpWithContextPatternAndGuessWordsProvider(Congrats, SuccessProvider, [true, jest.fn()], guessWordsProviderValue)
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.text().length).not.toBe(0)
    })

    test('does not throw warning with expected props', () => {
        const expectedProps = { success: true }
        checkProps(Congrats, expectedProps, 'success')
    })
})

describe('`New Game` functionality tests', () => {

    let wrapper
    let resetGameMock = jest.fn()

    beforeEach(() => {
        const props = {
            resetGame: resetGameMock,
        }
        wrapper = setUpWithContextPatternAndGuessWordsProvider(Congrats, SuccessProvider, [true, jest.fn()], guessWordsProviderValue, props)
    })

    afterEach(() => {
        resetGameMock.mockClear()
    })

    test('It renders correctly', () => {
        const newGameButton = findByTestAttr(wrapper, 'new-game')
        expect(newGameButton.length).toBe(1)
    })

    test('`resetGame` A.C. is called when click the button', () => {
        const newGameButton = findByTestAttr(wrapper, 'new-game')
        newGameButton.simulate('click')
        expect(resetGameMock.mock.calls.length).toBe(1)
    })

    // test('Global state is clean after resetGame A.C. is dispatched', () => {
    //     const storeProps = {
    //         guessedWordsReducer: {
    //             guessedWords: [
    //                 {guessedWord: 'train', letterMatchCount: 2},
    //                 {guessedWord: 'agile', letterMatchCount: 2},
    //                 {guessedWord: 'party', letterMatchCount: 1},
    //             ],
    //             secretWord: 'dance'
    //         },
    //         successReducer: {
    //             success: true
    //         }
    //     }
    //     const store = storeFactory(storeProps)
    //
    //     const newGameButton = findByTestAttr(wrapper, 'new-game')
    //     newGameButton.simulate('click')
    //
    //     // Api Call
    //     moxios.install()
    //     const apiResponse = { 'randomWord': 'run' }
    //
    //     moxios.wait(() => {
    //         const request = moxios.requests.mostRecent()
    //         request.respondWith({
    //             status: 200,
    //             response: apiResponse
    //         })
    //     })
    //
    //     return store.dispatch(resetGame())
    //         .then(() => {
    //             return store.dispatch(getSecretWordAxios())
    //                 .then(() => {
    //                     const newState = store.getState()
    //
    //                     expect(newState.guessedWordsReducer.secretWord).toBe(apiResponse.randomWord)
    //                     expect(newState.guessedWordsReducer.guessedWords).toEqual([])
    //                     expect(newState.successReducer.success).toBe(false)
    //
    //                     moxios.uninstall()
    //                 })
    //     })
    //
    // })
})

describe('Congrats Language tests', () => {
    let setup
    
    beforeEach(() => {
        setup = (success, language) => {
            success = success || false
            language = language || 'en'

            let guessedWordsMock = [[], jest.fn()]

            return mount(
                <GuessedWordsContext.Provider value={guessedWordsMock}>
                    <languageContext.Provider value={language}>
                        <SuccessProvider value={[success, jest.fn()]}>
                            <Congrats />
                        </SuccessProvider>
                    </languageContext.Provider>
                </GuessedWordsContext.Provider>
            )
        }
    })
    
    test('Correctly renders congrats string in english', () => {
        const wrapper = setup(true, 'en')
        const successMessage = findByTestAttr(wrapper, 'congrats-display')
        expect(successMessage.text()).toContain(getStringByLanguage('en', 'congrats'))
    })

    test('Correctly renders congrats string in spanish', () => {
        const wrapper = setup(true, 'es')
        const successMessage = findByTestAttr(wrapper, 'congrats-display')
        expect(successMessage.text()).toContain(getStringByLanguage('es', 'congrats'))
    })
})
