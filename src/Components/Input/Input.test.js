import React from 'react'
import {
    findByTestAttr,
    setUpWithContext,
    setUpWithContextPatternAndGuessWordsProvider,
    storeFactory
} from "../../../test/testUtils";
import InputDefault, {Input} from "./input";
import {mount, shallow} from 'enzyme'
import {languageStrings} from '../../helpers/languages'
import languageContext from '../../context/LanguageContext'
import {SuccessProvider} from '../../context/SuccessContext'
import {guessWord} from '../../helpers/GuessWordCompare'
import {GuessedWordsContext} from '../../context/GuessedWordsContext'
import Congrats from '../Congrats/Congrats'

describe('Input field tests, word not guessed', () => {

    let wrapper
    beforeEach(() => {
        let guessedWordsProviderMock = [[], jest.fn()]
        wrapper = setUpWithContextPatternAndGuessWordsProvider(
            Input, SuccessProvider, [false, jest.fn()], guessedWordsProviderMock
        )
    })

    test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'input-form')
        expect(component.length).toBe(1)
    })

    test('renders input box', () => {
        const component = findByTestAttr(wrapper, 'guess-input')
        expect(component.length).toBe(1)
    })

    test('renders submit button', () => {
        const component = findByTestAttr(wrapper, 'verification-button')
        expect(component.length).toBe(1)
    })
})

describe('Input field tests, word guessed', () => {

    let wrapper
    beforeEach(() => {
        let guessedWordsProviderMock = [[], jest.fn()]
        wrapper = setUpWithContextPatternAndGuessWordsProvider(
            Input, SuccessProvider, [true, jest.fn()], guessedWordsProviderMock
        )
    })

    test('renders component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
        expect(component.length).toBe(1)
    })

    test('does not render input box', () => {
        const component = findByTestAttr(wrapper, 'guess-input')
        expect(component.length).toBeFalsy()
    })

    test('does not render submit button', () => {
        const component = findByTestAttr(wrapper, 'verification-button')
        expect(component.length).toBeFalsy()
    })
})

describe('Submit test', () => {
    const anArgument = 'Test arg'
    let inputComponent
    let wrapper

    beforeEach(() => {
        // guessWordACMock = jest.fn()
        // guessWord = guessWordACMock
        let guessedWordsProviderMock = [[], jest.fn()]

        wrapper = setUpWithContextPatternAndGuessWordsProvider(
            Input, SuccessProvider, [false, jest.fn()], guessedWordsProviderMock, {secretWord: 'walk'}
        )

        inputComponent = findByTestAttr(wrapper, 'guess-input')
        inputComponent.simulate('change', {target: {value: anArgument}})

        const verifyButton = findByTestAttr(wrapper, 'verification-button')
        verifyButton.simulate('click', { preventDefault() {} })
    })

    // test('It should call `guessWord` A.C. when click the Verify button', () => {
    //     expect(guessWordACMock.mock.calls.length).toBe(1)
    // })
    //
    // test('`guessWord` A.C. receives same word as type in input', () => {
    //     expect(guessWordACMock.mock.calls[0]).toEqual([anArgument, 'walk'])
    // })

    test('Text box is clean after Submit', () => {
        inputComponent = findByTestAttr(wrapper, 'guess-input')
        expect(inputComponent.props().value).toBe('')
    })
})

describe('Input Language tests', () => {
    let guessedWordsMock = [[], jest.fn()]
    let success = false
    let wrapper

    describe('EN texts', () => {
        let language = 'en'

        beforeEach(() => {
            wrapper = mount(
                <GuessedWordsContext.Provider value={guessedWordsMock}>
                    <languageContext.Provider value={language}>
                        <SuccessProvider value={[success, jest.fn()]}>
                            <Input />
                        </SuccessProvider>
                    </languageContext.Provider>
                </GuessedWordsContext.Provider>
            )
        })

        test('Verify that placeholders is in EN Language', () => {
            const inputTextComponent = findByTestAttr(wrapper, 'guess-input')
            expect(inputTextComponent.at(0).props().placeholder).toEqual(languageStrings.en.guessInputPlaceholder)
        })

        test('Verify that Verify button shows text in english', () => {
            const inputTextComponent = findByTestAttr(wrapper, 'verification-button')
            expect(inputTextComponent.text()).toEqual(languageStrings.en.verify)
        })
    })

    describe('ES texts', () => {
        let language = 'es'

        beforeEach(() => {
            wrapper = mount(
                <GuessedWordsContext.Provider value={guessedWordsMock}>
                    <languageContext.Provider value={language}>
                        <SuccessProvider value={[success, jest.fn()]}>
                            <Input />
                        </SuccessProvider>
                    </languageContext.Provider>
                </GuessedWordsContext.Provider>
            )
        })

        test('Verify that placeholders is in ES Language', () => {
            const inputTextComponent = findByTestAttr(wrapper, 'guess-input')
            expect(inputTextComponent.at(0).props().placeholder).toEqual(languageStrings.es.guessInputPlaceholder)
        })



        test('Verify that Verify button shows text in spanish', () => {
            const inputTextComponent = findByTestAttr(wrapper, 'verification-button')
            expect(inputTextComponent.text()).toEqual(languageStrings.es.verify)
        })
    })
})
