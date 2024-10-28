import React, { FC } from "react"
import { ITask } from "../App"
import { TitleTasks } from "../style/style";

interface IProps {
  taskArray: ITask[];
}

export const NumberOfTasks: FC<IProps> = ({ taskArray}) => {
  return (
    <TitleTasks>
      Количество задач - {taskArray.length}
    </TitleTasks>
  )
}