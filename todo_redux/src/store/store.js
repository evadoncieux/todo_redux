import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice.js'

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})