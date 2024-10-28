import { Dispatch, FC, SetStateAction, useState } from "react";
import { WrapFilterTask } from "../style/style";

interface IProps {
  setFilterTasks: Dispatch<SetStateAction<'done' | 'all' | 'active'>>;
}
interface IDisableButton {
  all: false,
  done: false,
  active: false,
}

export const TasksFilter: FC<IProps> = ({ setFilterTasks }) => {
  const [disableButton, setDisableButton] = useState({
    all: false,
    done: false,
    active: false,
  })

  return (
    <>
      <WrapFilterTask>
        <button onClick={() => { setFilterTasks('all'); setDisableButton({ all: true, done: false, active: false, }) }} disabled={disableButton.all}>Показать все задачи</button>
        <button onClick={() => { setFilterTasks('active'); setDisableButton({ all: false, done: false, active: true, }) }} disabled={disableButton.active} >Показать активные задачи</button>
        <button onClick={() => { setFilterTasks('done'); setDisableButton({ all: false, done: true, active: false, }) }} disabled={disableButton.done}>Показать выполненные задачи</button>
      </WrapFilterTask >
    </>
  )
}
