import { configureStore } from '@reduxjs/toolkit'
import  locationsReducer  from './features/locations/locationSlice'

export const store = configureStore({
    reducer: {
        locations:locationsReducer,
    }
})
