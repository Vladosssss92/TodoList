import { Dispatch, FC, SetStateAction, useState } from "react";
import { ButtonS, WrapFilterTask } from "../style/style";

interface IProps {
  setFilterTasks: Dispatch<SetStateAction<'done' | 'all' | 'active'>>;
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
        <ButtonS
          onClick={() => {
            setFilterTasks('all');
            setDisableButton({ all: true, done: false, active: false, })
          }}
          disabled={disableButton.all}>
          Показать все задачи
        </ButtonS>
        <ButtonS
          onClick={() => {
            setFilterTasks('active');
            setDisableButton({ all: false, done: false, active: true, })
          }}
          disabled={disableButton.active} >
          Показать активные задачи
        </ButtonS>
        <ButtonS
          onClick={() => { setFilterTasks('done'); setDisableButton({ all: false, done: true, active: false, }) }}
          disabled={disableButton.done}>
          Показать выполненные задачи
        </ButtonS>
      </WrapFilterTask >
    </>
  )
}
