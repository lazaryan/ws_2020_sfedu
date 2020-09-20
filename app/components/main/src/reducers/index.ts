import update from 'immutability-helper'

export const initialState = {}

export const reducers = {}

export default (state = initialState, action) =>
    reducers[action.type] ? update(state, reducers[action.type](action.payload, state, action.requestPayload)) : state
