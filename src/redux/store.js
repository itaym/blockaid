
import reducer from './reducers/mainReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer
})
