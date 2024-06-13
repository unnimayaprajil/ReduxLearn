
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../features/toDoSlice'
import counterReducer from '../features/counterSlice'
export const store = configureStore({
    reducer: {
        toDo: toDoReducer,
        counter: counterReducer
    }
})
