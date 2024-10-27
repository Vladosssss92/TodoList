import React, { Dispatch, FC, SetStateAction } from "react";
import { WrapFilterTask } from "../style/style";

interface IProps {
  setFilterTasks: Dispatch<SetStateAction<'done' | 'all' | 'active'>>;
}

export const TasksFilter: FC<IProps> = ({ setFilterTasks }) => {
  return (
    <>
      <WrapFilterTask>
        <button onClick={() => setFilterTasks('all')}>Показать все задачи</button>
        <button onClick={() => setFilterTasks('active')}>Показать активные задачи</button>
        <button onClick={() => setFilterTasks('done')}>Показать выполненные задачи</button>
      </WrapFilterTask>
    </>
  )
}
