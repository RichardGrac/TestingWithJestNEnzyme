import {shallow} from 'enzyme'
import React from 'react'

export const setUp = (Component, props = {}, state = null) => {
    const s = shallow(<Component {...props}/>)
    if (state) s.setState(state)
    return s
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}
