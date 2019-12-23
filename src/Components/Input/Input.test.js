import React from 'react'
import {findByTestAttr, setUpConnectedComponent, storeFactory} from "../../../test/testUtils";
import InputDefault, {Input} from "./input";
import {shallow} from 'enzyme'

const setUp = (initialState = {}) => {
    const mockedStore = storeFactory(initialState)
    return setUpConnectedComponent(InputDefault, mockedStore).dive().dive()
}

describe('Input field tests, word not guessed', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {successReducer: {success: false}}
        wrapper = setUp(initialState)
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
        const initialState = {successReducer: {success: true}}
        wrapper = setUp(initialState)
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

describe('It will test Redux props', () => {
    test('It should has access to `success` prop', () => {
        const initialState = {successReducer: {success: true}}
        const mockedStore = storeFactory(initialState)
        const wrapper = shallow(<InputDefault store={mockedStore} />).dive()
        const successProp = wrapper.prop('success')
        expect(successProp).toBe(initialState.successReducer.success)
    })

    test('It should be receiving `guessWord` action creator', () => {
        const mockedStore = storeFactory()
        const wrapper = shallow(<InputDefault store={mockedStore} />).dive()
        const guessWordActionCreator = wrapper.prop('guessWord')
        expect(guessWordActionCreator).toBeInstanceOf(Function)
    })
})

describe('Submit test', () => {
    test('It should call `guessWord` A.C. when click the Verify button', () => {
        const guessWordACMock = jest.fn()
        const props = {
            guessWord: guessWordACMock,
            success: false,
        }
        const wrapper = shallow(<Input {...props} />)

        const inputComponent = findByTestAttr(wrapper, 'guess-input')
        inputComponent.simulate('change', {target: {value: 'A test string'}})

        const verifyButton = findByTestAttr(wrapper, 'verification-button')
        verifyButton.simulate('click')

        expect(guessWordACMock.mock.calls.length).toBe(1)
    })

    test('`guessWord` A.C. receives same word as type in input', () => {
        const guessedWordFnMock = jest.fn()
        const props = {
            guessWord: guessedWordFnMock,
            success: false,
        }
        const expectedParameter = 'Test arg'
        const wrapper = shallow(<Input {...props} />)

        const inputComponent = findByTestAttr(wrapper, 'guess-input')
        inputComponent.simulate('change', {target: {value: expectedParameter}})
        
        const verifyComponent = findByTestAttr(wrapper, 'verification-button')
        verifyComponent.simulate('click')
        
        expect(guessedWordFnMock.mock.calls[0]).toEqual([expectedParameter])
    })
})
