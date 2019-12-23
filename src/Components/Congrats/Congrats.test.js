import React from 'react'

import Congrats from './Congrats'
import {checkProps, findByTestAttr, setUp, storeFactory} from '../../../test/testUtils'
import {shallow} from 'enzyme'
import moxios from 'moxios'
import {getSecretWordAxios} from '../../redux/GuessedWords/actions'
import {resetGame} from '../../redux/NewGame/actions'

describe('Congrats tests', () => {
    test('renders without error', () => {
        const wrapper = setUp(Congrats)
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.length).toBe(1)
    })

    test('renders no text when `success` prop is false', () => {
        const wrapper = setUp(Congrats, {success: false})
        const congratsDisplay = findByTestAttr(wrapper, 'congrats-display')
        expect(congratsDisplay.text().length).toBe(0)
    })

    test('renders non-empty congrats message when `success` props is true', () => {
        const wrapper = setUp(Congrats, {success: true})
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
    beforeEach(() => {
        const props = {
            success: true
        }
        wrapper = shallow(<Congrats {...props} />)
    })

    test('It renders correctly', () => {
        const newGameButton = findByTestAttr(wrapper, 'new-game')
        expect(newGameButton.length).toBe(1)
    })

    test('`resetGame` A.C. is called when click the button', () => {
        const resetGameMock = jest.fn()
        wrapper.setProps({resetGame: resetGameMock})

        const newGameButton = findByTestAttr(wrapper, 'new-game')
        newGameButton.simulate('click')
        expect(resetGameMock.mock.calls.length).toBe(1)
    })

    test('Global state is clean after resetGame A.C. is dispatched', () => {
        const resetGameMock = jest.fn()
        const storeProps = {
            guessedWordsReducer: {
                guessedWords: [
                    {guessedWord: 'train', letterMatchCount: 2},
                    {guessedWord: 'agile', letterMatchCount: 2},
                    {guessedWord: 'party', letterMatchCount: 1},
                ],
                secretWord: 'dance'
            },
            successReducer: {
                success: true
            }
        }
        const store = storeFactory(storeProps)
        wrapper.setProps({resetGame: resetGameMock})

        const newGameButton = findByTestAttr(wrapper, 'new-game')
        newGameButton.simulate('click')

        // Api Call
        moxios.install()
        const apiResponse = { 'randomWord': 'run' }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: apiResponse
            })
        })

        return store.dispatch(resetGame())
            .then(() => {
                return store.dispatch(getSecretWordAxios())
                    .then(() => {
                        const newState = store.getState()

                        expect(newState.guessedWordsReducer.secretWord).toBe(apiResponse.randomWord)
                        expect(newState.guessedWordsReducer.guessedWords).toEqual([])
                        expect(newState.successReducer.success).toBe(false)

                        moxios.uninstall()
                    })
        })

    })
})
