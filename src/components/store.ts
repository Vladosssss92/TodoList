import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterInterface, FilterType, IStoreTask, ITask } from "./types";

const taskSlice = createSlice({
  name: "newTask",
  initialState: {
    newTask: [],
  } as IStoreTask,
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
