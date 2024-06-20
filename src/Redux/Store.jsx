import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from './paginationSlice'
import apiobjReducer from './apiobj'

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        apiobj: apiobjReducer
    },
})