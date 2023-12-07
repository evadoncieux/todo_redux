import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        id: 0,
        content: [],
        completed: false
    },
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                content: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        // edit: (state, action) => {
        //
        // },
        toggleDone: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.done = !item.done;
            }
        },
        deleteItem: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1)
            }
        },
    },
});


export const { add, toggleDone, deleteItem } = todoSlice.actions
export default todoSlice.reducer