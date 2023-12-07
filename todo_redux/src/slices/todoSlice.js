import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: [],
    id: null,
    completed: false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newTodo = {
                id: Date.now(),
                content: action.payload,
                completed: false,
            };
            state.todos = [...state.todos, newTodo];
            console.log(state.todos);
            state.count += 1;
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


export const { addItem, toggleDone, deleteItem } = todoSlice.actions
export default todoSlice.reducer