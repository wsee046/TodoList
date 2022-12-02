import { combineReducers, createStore } from "@reduxjs/toolkit";
import { ITask } from "../types/schema";

var currentId : number = 1;

const initialState = { 
    0: {
    id: 0,
    name: "Task! :)",
    description: "This is task",
    isComplete: false,
    },
    1: {
        id: 1,
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
            const id = action.payload.id;
            const isCompleteValue = action.payload.isCompleteValue;
            const newState = {...state, [id] : {
                ...state[id], isComplete: isCompleteValue,
            }}
            console.log(newState);

            return newState;
        }
        case "addTask": {
            const {task} = action.payload;
            return {...state, [task.id] : {
                id: task.id,
                name: task.name,
                description: task.description,
                isComplete: task.isComplete
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

export function getNextId() {
    currentId += 1;
    return currentId;
}

export const getAllTasks = (state : any) => {
    return state.task;
}


// action creators
export const changeIsComplete = (id : number) => {
    return {
        type: "changeIsComplete",
        payload: {
            id: id,
            isCompleteValue: true,
        },
    }
}  

export const addTask = (task : ITask) => {
    //const id = getNextId()
    return {
        type: "addTask",
        payload: {
            task: task
        }
    }
}