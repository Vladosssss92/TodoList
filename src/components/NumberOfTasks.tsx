import { FC } from "react"
import { TitleTasks } from "../style/style";
import { IRootState } from "./types";
import { useSelector } from "react-redux";


export const NumberOfTasks: FC = () => {
  const taskArr = useSelector((state: IRootState) => state.tasks.newTask)
  return (
    <TitleTasks>
      Количество задач - {taskArr.length}
    </TitleTasks>
  )
}
