import {  configureStore, createSlice } from "@reduxjs/toolkit";
import { ACTIVE, COMPLETED } from "../components/TodoList/filter-types";

const todosReducer = createSlice({
    name: "todo-reducer",
    initialState: { todos: [] },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        editTodo(state, action) {
            state.todos = state.todos.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        status: item.status === ACTIVE ? COMPLETED : ACTIVE,
                    };
                }
                return item;
            });
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        clearCompleted(state){
            state.todos =  state.todos.filter(item => item.status !== COMPLETED);
        }
    },
});

const modeToggler = createSlice({
    name: "mode toggler",
    initialState: {mode:"light"},
    reducers:{
        toggleMode(state){
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})


const store = configureStore({
    reducer:{
        todos: todosReducer.reducer,
        mode: modeToggler.reducer
    }
}
);

export const todosActions = todosReducer.actions;
export const modeActions = modeToggler.actions;

export default store;
