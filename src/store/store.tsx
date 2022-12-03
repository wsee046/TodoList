import { combineReducers, createStore } from "@reduxjs/toolkit";
import { editingReducer } from "./editing";
import { taskReducer } from "./task";


export const store = createStore(combineReducers({
    task: taskReducer,
    editing: editingReducer,
}));