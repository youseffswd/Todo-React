import { combineReducers, createStore } from "redux";
import { ACTIVE, COMPLETED } from "../components/TodoList/filter-types";

const todosReducer = (state = [], action) => {
    if (action.type === "ADD_TODO") {
        return [...state, action.payload];
    } else if (action.type === "EDIT_TODO") {
        return state.map(item => {
            if (item.id === action.payload) {
                return {
                    ...item,
                    status: item.status === ACTIVE ? COMPLETED : ACTIVE,
                };
            }
            return item;
        });
    }else if(action.type === "DELETE_TODO"){
        return state.filter(item => item.id !== action.payload)
    }else if(action.type === "CLEAR_COMPLETED"){
        return state.filter(item => item.status !== COMPLETED)
    }
    return state;
};

const modeChanger = (state = "light", action) => {
    if (action.type === "TOGGLE_MODE") {
        return state === "light" ? "dark" : "light";
    }
    return state;
};

const store = createStore(
    combineReducers({ todos: todosReducer, mode: modeChanger })
);

export default store;
