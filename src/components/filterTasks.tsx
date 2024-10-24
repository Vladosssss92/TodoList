import React, { FC, useState } from "react";
import Tasks from "./tasks";
import { WrapFilterTask } from "../style/style";

const FilterTask: FC = () => {
  const [showActiveTask, setshowActiveTask] = useState(true)

  const showAllTasks = () => {
    setshowActiveTask(true)
    return showActiveTask
  }

  const showActiveTasks = (): boolean => {
    setshowActiveTask(false)
    return showActiveTask
  }

  const showCompletedTasks = () => {

  }

  return (
    <>
      <WrapFilterTask>
        <button onClick={showAllTasks}>Показать все задачи</button>
        <button onClick={showActiveTasks}>Показать активные задачи</button>
        <button onClick={showCompletedTasks}>Показать выполненные задачи</button>
      </WrapFilterTask>
      <Tasks allTasks={showActiveTask} activeTasks={showActiveTask} completedTasks={showCompletedTasks} />
    </>
  )
}

export default FilterTask

