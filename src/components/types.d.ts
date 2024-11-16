export interface ITask {
  id: string;
  task: string;
  completed: boolean;
  editTask: boolean;
}

export interface IStoreTask {
  newTask: ITask[];
}

export interface IRootState {
  tasks: IStoreTask;
}

export type FilterType = "done" | "all" | "active";

export interface FilterInterface {
  filter: "done" | "all" | "active";
}

export interface FilterInterfaceSelect {
  filters: FilterInterface;
}

export type AppDispatch = typeof store.dispatch;
