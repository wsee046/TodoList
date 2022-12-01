import { applyMiddleware, combineReducers, createReducer, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"

const initialState = { 
    0: {
    id: 0,
    name: "Task! :)",
    description: "This is task",
    isComplete: false,
    },
    1: {
        id: 0,
        name: "Task 2! :)",
        description: "This is task",
        isComplete: false,
    }

}

export const store = createStore(combineReducers({
    task: taskReducer,
}));


function taskReducer(state = initialState, action){
    switch (action.type) {
        case "changeName": {
            const {id, name} = action.payload;
            return {...state, [id] : {
                ...state[id], name: name,
            }}
        };
        case "changeDescription": {
            const {id, description} = action.payload;
            return {...state, [id] : {
                ...state[id], description: description,
            }}
        }
        case "changeIsComplete": {
            const {id, isComplete} = action.payload;
            return {...state, [id] : {
                ...state[id], isComplete: isComplete,
            }}
        }

        default:
            return state;
    }
}

// selectors
export const getName = (id) => {
    return function selectName(state) {
        return state.task[id].name;
    }
};

export const getDescription = (id) => {
    return function selectDescription(state) {
        return state.task[id].description;
    }
}

export const getIsComplete = (id) => {
    return function selectIsComplete(state) {
        return state.task[id].isComplete;
    }
}