import { ITask } from "../types/schema";

const initialState = {
    isEditing: false,
    currentTask: null,
}

export function editingReducer(state = initialState, action: any) {
    switch (action.type) {
        case "changeIsEditing":
            const value = action.payload;
            return {...state, isEditing: value }
        case "changeCurrentTask":
            const id = action.payload;
            return {...state, currentTask: id}
        default:
            return state;
    }
}

// selectors
export const getIsEditing = (state: any) => state.editing.isEditing;
export const getCurrentTask = (state: any) => state.editing.currentTask;

// action creators
export const changeIsEditing = (value : boolean) => {
    return {
        type: "changeIsEditing",
        payload: value,
    }
}

export const changeCurrentTask = (task: ITask | null) => {
    return {
        type: "changeCurrentTask",
        payload: task,
    }
}