import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authslice"
import inputReducer from "../features/input/inputslice"

import countReducer from "../features/count/countslice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter:countReducer,
        input:inputReducer
    }
})