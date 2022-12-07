import { ITask } from "../types/schema";
import { produce } from "immer";

var currentId: number = 1;

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
  },
};

// playing around with produce from immer.
export const taskReducer = (
  state = initialState,
  action: {
    type: any;
    payload: {
      id?: any;
      name?: any;
      description?: any;
      isCompleteValue?: any;
      task?: any;
    };
  }
) =>
  produce(state, (draftState: { [id: number]: ITask }) => {
    switch (action.type) {
      case "changeName": {
        const { id, name } = action.payload;
        draftState[id].name = name;
        break;
      }
      case "changeDescription": {
        const { id, description } = action.payload;
        draftState[id].description = description;
        break;
      }

      case "changeIsComplete": {
        const { id, isCompleteValue } = action.payload;
        draftState[id].isComplete = isCompleteValue;
        break;
      }

      case "addTask": {
        const { task } = action.payload;
        draftState[task.id] = {
          id: task.id,
          name: task.name,
          description: task.description,
          isComplete: task.isComplete,
        };
        break;
      }

      case "deleteTask": {
        const { id } = action.payload;
        delete draftState[id];
        break;
      }

      default:
        break;
    }
  });

// selectors
export const getName = (id: number) => {
  return function selectName(state: any) {
    return state.task[id].name;
  };
};

export const getDescription = (id: number) => {
  return function selectDescription(state: any) {
    return state.task[id].description;
  };
};

export const getIsComplete = (id: number) => {
  return function selectIsComplete(state: any) {
    return state.task[id].isComplete;
  };
};

export function getNextId() {
  currentId += 1;
  return currentId;
}

export const getAllTasks = (state: any) => {
  return state.task;
};

// action creators

export const addTask = (task: ITask) => {
  return {
    type: "addTask",
    payload: {
      task: task,
    },
  };
};

export const deleteTask = (id: number) => {
  return {
    type: "deleteTask",
    payload: {
      id: id,
    },
  };
};

export const changeIsComplete = (id: number) => {
  return {
    type: "changeIsComplete",
    payload: {
      id: id,
      isCompleteValue: true,
    },
  };
};

export const changeName = (id: number, newName: string) => {
  return {
    type: "changeName",
    payload: {
      id: id,
      name: newName,
    },
  };
};

export const changeDescription = (id: number, newDescription: string) => {
  return {
    type: "changeDescription",
    payload: {
      id: id,
      description: newDescription,
    },
  };
};
