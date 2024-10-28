import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { LiS, InputS, ButtonS, Task, WrapButtons } from "../style/style";
import { ITask } from "../App";

interface IProps {
  setTaskArray: Dispatch<SetStateAction<ITask[]>>;
  taskArray: ITask[];
  filterTasks: 'done' | 'all' | 'active';
}

export const TasksList: FC<IProps> = ({ setTaskArray, taskArray, filterTasks }) => {
  const [inputTaskValue, setInputTaskValue] = useState('');

  const deleteTaskButton = (id: string) => {
    const updatedArray = taskArray.filter((element) => element.id !== id)
    setTaskArray(updatedArray)
  }

  const editTaskButton = (id: string) => {
    const currentTask = taskArray.find((task) => task.id === id)
    setInputTaskValue(currentTask.task);
    setTaskArray(prev => {
      return prev.map((element) => {
        element.editTask = false
        if (element.id === id) {
          return {
            ...element, editTask: true
          }
        } return element
      })
    })
  }

  const inputEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskValue(e.target.value);
  }

  const taskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskArray[e.target.id].completed = e.target.checked
    setTaskArray([...taskArray])
  }

  const setTaskValue = (id: string) => {
    setTaskArray(prev => {
      return prev.map((element) => {
        if (element.id === id) {
          return {
            ...element, editTask: false, task: inputTaskValue
          }
        } return element
      })
    })
  }

  const cancelSaving = (id: string) => {
    setTaskArray(prev => {
      return prev.map((element) => {
        if (element.id === id) {
          return {
            ...element, editTask: false
          }
        } return element
      })
    })
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>, id: string) => {
    if (e.key === 'Enter') {
      setTaskValue(id)
    }
    if (e.key === 'Escape') {
      cancelSaving(id)
    }
  }

  const formattedTaskArray = taskArray.filter((element) => {
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
        {formattedTaskArray.map((element, index) => {
          if (!element.editTask) {
            return (
              <LiS key={element.id}>
                <label>
                  <input id={index.toString()} type="checkbox" checked={element.completed} onChange={taskStatus} />
                  <Task>{element.task}</Task>
                </label>
                <WrapButtons>
                  <ButtonS onClick={() => editTaskButton(element.id)}>Изменить</ButtonS>
                  <ButtonS onClick={() => deleteTaskButton(element.id)}>Удалить</ButtonS>
                </WrapButtons>
              </LiS>)
          }
          return (
            <LiS key={element.id}>
              <InputS value={inputTaskValue} onChange={inputEditTask} onKeyDown={(e) => onKeyDown(e, element.id)} />
              <WrapButtons>
                <ButtonS onClick={() => cancelSaving(element.id)}>Отменить</ButtonS>
                <ButtonS onClick={() => setTaskValue(element.id)}>Сохранить</ButtonS>
              </WrapButtons>
            </LiS>)
        })}
      </ul>
    </>
  )
}
