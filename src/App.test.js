import {App} from './App'
import {shallow} from 'enzyme'
import React from 'react'

describe('<App /> tests', () => {
    test('It renders App without errors', () => {
        const wrapper = shallow(<App />)
        const appComponent = wrapper.find(`[data-test='app-component']`)
        expect(appComponent.length).toBe(1)
    })
})
