import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterInterface, FilterType, IStoreTask, ITask } from "./types";

const loadFromLocalStorage = () => {
  try {
    const loadLocalStorageData = localStorage.getItem("tasks");
    if (loadLocalStorageData) {
      return JSON.parse(loadLocalStorageData);
    }
    return undefined;
  } catch (error) {
    console.log("Ошибка загрузки из локального хранилища ", error);
  }
};

const saveToLocalStorage = (state: IStoreTask) => {
  try {
    const saveLocalStorageData = JSON.stringify(state);
    localStorage.setItem("tasks", saveLocalStorageData);
  } catch (error) {
    console.log("Ошибка сохранения в локальное хранилище ", error);
  }
};

const dataFromLocalStorage = loadFromLocalStorage();

const initialState = { newTask: dataFromLocalStorage || [] };

const taskSlice = createSlice({
  name: "newTask",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<ITask>) => {
      state.newTask.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask[]>) => {
      state.newTask = action.payload;
    },
  },
});

const filterSlice = createSlice({
  name: "filterTask",
  initialState: {
    filter: "all",
  } as FilterInterface,
  reducers: {
    setFilterTasks: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addNewTask, updateTask } = taskSlice.actions;
export const { setFilterTasks } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    filters: filterSlice.reducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState().tasks.newTask);
});
