import {shallow} from 'enzyme'
import React from 'react'
import {assertPropTypes} from 'check-prop-types'

import rootReducer from "../src/redux";
import {createStore} from "redux";

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}

export const setUp = (Component, props = {}, state = null) => {
    const s = shallow(<Component {...props}/>)
    if (state) s.setState(state)
    return s
}

export const setUpConnectedComponent = (Component, store, props = {}, state = null) => {
    const s = shallow(<Component store={store} />)
    if (props) s.setProps(props)
    if (state) s.setState(state)
    return s
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (Component, expectedProps, property) => {
    assertPropTypes(Component.propTypes, expectedProps, 'prop', Component[property])
}
