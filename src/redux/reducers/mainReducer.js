import * as actions from '../actions/mainActions'
import { createReducer } from '@reduxjs/toolkit'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../checkers/index.js'

const initialState = {
    isLoading: false,
    errors: [],
    last: 1,
    page: 1,
    posts: [],
}

const mainReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.getPosts.fulfilled, (state, action) => {
            state.posts = action.payload.posts
            state.last = action.payload.last
            state.page = action.payload.page
        })
        .addCase(actions.clearAllErrors.fulfilled, (state, action) => {
            state.errors = action.payload
        })
        .addCase(actions.clearError.fulfilled, (state, action) => {
            state.errors = action.payload
        })
        .addMatcher(isPendingAction, (state) => {
            state.isLoading = true
        })
        .addMatcher(isFulfilledAction, (state) => {
            state.isLoading = false
        })
        .addMatcher(isRejectedAction, (state, action) => {
            if (action.payload) {
                state.errors.push(action.payload)
            }
            state.isLoading = false
        })
})

export default mainReducer