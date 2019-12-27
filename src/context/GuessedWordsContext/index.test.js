import React from 'react'
import {shallow} from 'enzyme'
import {GuessedWordsProvider, useGuessedWords} from './index'

const FunctionalComponent = () => {
    useGuessedWords()
    return <div>Test Component</div>
}

describe('GuessedWords Context tests', () => {
    test('It should throw an Exception if context is not used within Provider', () => {
        expect(() => {
            shallow(<FunctionalComponent />)
        }).toThrowError()
    })

    test('It should not throw and Exception', () => {
        expect(() => {
            shallow(
                <GuessedWordsProvider>
                    <FunctionalComponent />
                </GuessedWordsProvider>
            )
        }).not.toThrowError()
    })
})
