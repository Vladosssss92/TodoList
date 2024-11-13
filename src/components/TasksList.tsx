import React, { FC, useState } from "react";
import { LiS, InputS, ButtonS, WrapButtons } from "../style/style";
import { FilterInterfaceSelect, IRootState } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "./store";

export const TasksList: FC = () => {
  const [inputTaskValue, setInputTaskValue] = useState('');

  const taskArr = useSelector((state: IRootState) => state.tasks.newTask)
  const filterTasks = useSelector((state: FilterInterfaceSelect) => state.filters.filter)
  const dispatch = useDispatch()

  const inputEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskValue(e.target.value);
  }

  const deleteTaskButton = (id: string) => {
    const updatedArray = taskArr.filter((element) => element.id !== id)
    dispatch(updateTask(updatedArray))
  }

  const editTaskButton = (id: string) => {
    const currentTask = taskArr.find((task) => task.id === id)
    setInputTaskValue(currentTask ? currentTask.task : '');
    const updatedArray = taskArr.map((element) => {
      if (element.id === id) {
        return {
          ...element, editTask: true
        }
      } else {
        return {
          ...element, editTask: false
        }
      }
    })
    dispatch(updateTask(updatedArray))
  }

  const taskStatus = (id: string) => {
    const updatedArray = taskArr.map((element) => {
      if (element.id === id && element.completed) {
        return {
          ...element, completed: false
        }
      }
      if (element.id === id && !element.completed) {
        return {
          ...element, completed: true
        }
      } return element
    })
    dispatch(updateTask(updatedArray))
  }

  const setTaskValue = (id: string) => {
    const updatedArray = taskArr.map((element) => {
      if ((element.id === id && element.task !== inputTaskValue && inputTaskValue.trim())) {
        return {
          ...element, editTask: false, task: inputTaskValue, completed: false
        }
      }
      if ((element.id === id && !inputTaskValue.trim()) || element.id === id) {
        return {
          ...element, editTask: false
        }
      }
      return element
    })
    dispatch(updateTask(updatedArray))
  }

  const cancelSaving = (id: string) => {
    const updatedArray = taskArr.map((element) => {
      if (element.id === id) {
        return {
          ...element, editTask: false
        }
      } return element
    })
    dispatch(updateTask(updatedArray))
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, id: string) => {
    if (e.key === 'Enter') {
      setTaskValue(id)
    }
    if (e.key === 'Escape') {
      cancelSaving(id)
    }
  }

  const formattedTaskArray = taskArr.filter((element) => {
    switch (filterTasks) {
      case 'done':
        return element.completed;
      case 'active':
        return !element.completed;
      default:
        return element
    }

  })
  return (
    <>
      <ul>
        {formattedTaskArray.map((element) => {
          if (!element.editTask) {
            return (
              <LiS key={element.id}>
                <label>
                  <input
                    type="checkbox" checked={element.completed}
                    onChange={() => taskStatus(element.id)}
                    className="checkbox" />
                  <span className="custom-checkbox"></span>
                  <p className="task">{element.task}</p>
                </label>
                <WrapButtons>
                  <ButtonS
                    onClick={() => editTaskButton(element.id)}>
                    Изменить
                  </ButtonS>
                  <ButtonS
                    onClick={() => deleteTaskButton(element.id)}>
                    Удалить
                  </ButtonS>
                </WrapButtons>
              </LiS>)
          }
          return (
            <LiS key={element.id}>
              <InputS
                value={inputTaskValue}
                onChange={inputEditTask}
                onKeyDown={(e) => onKeyDown(e, element.id)} />
              <WrapButtons>
                <ButtonS
                  onClick={() => cancelSaving(element.id)}>
                  Отменить
                </ButtonS>
                <ButtonS
                  onClick={() => setTaskValue(element.id)}>
                  Сохранить
                </ButtonS>
              </WrapButtons>
            </LiS>)
        })}
      </ul>
    </>
  )
}
