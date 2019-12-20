import React from 'react'
import {findByTestAttr, setUpConnectedComponent, storeFactory} from "../../../test/testUtils";
import Input from "./input";
import {shallow} from "enzyme";

const setUp = (initialState = {}) => {
    const store = storeFactory(initialState)
    return setUpConnectedComponent(Input, store).dive().dive()
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
    test.todo('renders component without error')

    test.todo('does not render input box')

    test.todo('does not render submit button')
})
