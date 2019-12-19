import React from 'react'
import {findByTestAttr, setUpConnectedComponent, storeFactory} from "../../../test/testUtils";
import Input from "./input";
import {shallow} from "enzyme";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = setUpConnectedComponent(Input, store).dive().dive()
    return wrapper
}

describe('Input field tests, word not guessed', () => {

    let wrapper
    beforeEach(() => {
        const initialState = {success: true}
        wrapper = setup(initialState)
    })

    test('renders component without error', () => {
        console.log(wrapper.debug())
        const component = findByTestAttr(wrapper, 'input-form')
        expect(component.length).toBe(1)

    })

    test.todo('renders input box')

    test.todo('renders submit button')
})

describe('Input field tests, word guessed', () => {
    test.todo('renders component without error')

    test.todo('does not render input box')

    test.todo('does not render submit button')
})