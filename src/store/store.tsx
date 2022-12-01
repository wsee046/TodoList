import { combineReducers, createStore } from "@reduxjs/toolkit";

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


function taskReducer(state : any = initialState, action : any){
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
export const getName = (id : number) => {
    return function selectName(state : any) {
        return state.task[id].name;
    }
};

export const getDescription = (id : number) => {
    return function selectDescription(state : any) {
        return state.task[id].description;
    }
}

export const getIsComplete = (id : number) => {
    return function selectIsComplete(state : any) {
        return state.task[id].isComplete;
    }
}