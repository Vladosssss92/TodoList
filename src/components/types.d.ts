export interface ITask {
  id: string;
  task: string;
  completed: boolean;
  editTask: boolean;
}

export interface IProps {
  setTaskArray: Dispatch<SetStateAction<ITask[]>>;
  taskArray: ITask[];
  filterTasks: "done" | "all" | "active";
}

export interface IStoreTask {
  newTask: ITask[];
}

export interface IRootState {
  tasks: {
    newTask: ITask[];
  };
}

export interface IProps {
  setTaskArray: Dispatch<SetStateAction<ITask[]>>;
}

export type FilterType = "done" | "all" | "active";

export interface FilterInterface {
  filter: FilterType;
}

export interface FilterInterfaceSelect {
  filters: {
    filter: FilterType;
  };
}

export type AppDispatch = typeof store.dispatch;
