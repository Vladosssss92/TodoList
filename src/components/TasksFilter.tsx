import { FC, useState } from "react";
import { ButtonS, WrapFilterTask } from "../style/style";
import { useDispatch } from "react-redux";
import { setFilterTasks } from "./store";
import { AppDispatch } from "./types";


export const TasksFilter: FC = () => {
  const [disableButton, setDisableButton] = useState({
    all: false,
    done: false,
    active: false,
  })
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <WrapFilterTask>
        <ButtonS
          onClick={() => {
            // setFilterTasks('all');
            dispatch(setFilterTasks('all'));
            setDisableButton({ all: true, done: false, active: false, })
          }}
          disabled={disableButton.all}>
          Показать все задачи
        </ButtonS>
        <ButtonS
          onClick={() => {
            // setFilterTasks();
            dispatch(setFilterTasks('active'));
            setDisableButton({ all: false, done: false, active: true, })
          }}
          disabled={disableButton.active} >
          Показать активные задачи
        </ButtonS>
        <ButtonS
          onClick={() => {
            dispatch(setFilterTasks('done'));
            setDisableButton({ all: false, done: true, active: false, })
          }}
          disabled={disableButton.done}>
          Показать выполненные задачи
        </ButtonS>
      </WrapFilterTask >
    </>
  )
}
