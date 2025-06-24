import { createAsyncThunk } from '@reduxjs/toolkit'
import createError from "./createError.js";

const ACTION_CLEAR_ERROR = 'ACTION_CLEAR_ERROR'
const ACTION_CLEAR_ALL_ERRORS = 'ACTION_CLEAR_ALL_ERRORS'
const ACTION_GET_POSTS = 'ACTION_GET_POSTS'


export const getPosts = createAsyncThunk(
    ACTION_GET_POSTS,
    async (page = 1,{ rejectWithValue }) => {
        try {
            const url = `http://localhost:3000/results?_page=${page}&_per_page=10`
            const response = await fetch(url, {})
            const posts = await response.json()
            return { posts}
        }
        catch (e) {
            return rejectWithValue(createError(e.message))
        }
    }
)

export const clearError = createAsyncThunk(
    ACTION_CLEAR_ERROR,
    async ( error, { rejectWithValue, getState } ) => {
        try {
            const state = getState()
            const errors = [...state.errors]
            const index = errors.indexOf(error)
            if (index > -1) {
                errors.splice(index, 1)
            }
            return errors
        }
        catch ( e ) { return rejectWithValue(createError(e.message)) }
    }
)

export const clearAllErrors = createAsyncThunk(
    ACTION_CLEAR_ALL_ERRORS,
    async () => []
)
