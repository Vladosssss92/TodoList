import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { WrapTask, Li } from "../style/style";
import { ITask } from "../App";

interface IProps {
  setTaskArray: Dispatch<SetStateAction<ITask[]>>;
  taskArray: ITask[];
}

export const TasksList: FC<IProps> = ({ setTaskArray, taskArray }) => {
  const [inputTaskValue, setInputTaskValue] = useState('');

  const deleteTaskButton = (id: string) => {
    const updatedArrayAfterDeletionTask = taskArray.filter((element) => element.id !== id)
    setTaskArray(updatedArrayAfterDeletionTask)
  }

  const editTaskButton = (id: string) => {
    const currentTask = taskArray.find((task) => task.id === id)
    setInputTaskValue(currentTask.task)
    setTaskArray(prev => {
      return prev.map((element) => {
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
    taskArray[+e.target.id].completed = e.target.checked
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

  const formattedTaskArray = taskArray.filter((element) => element.task)
  return (
    <>
      <WrapTask>
        <ul>
          {formattedTaskArray.map((element, index) => {
            if (!element.editTask) {
              return (
                <Li key={element.id}>
                  <label>
                    <input id={index.toString()} type="checkbox" checked={element.completed} onChange={taskStatus} />
                    <p>{element.task}</p>
                  </label>
                  <button onClick={() => editTaskButton(element.id)}>Изменить</button>
                  <button onClick={() => deleteTaskButton(element.id)}>Удалить</button>
                </Li>)
            }
            return (
              <Li key={element.id}>
                <input value={inputTaskValue} onChange={inputEditTask} onKeyDown={(e) => onKeyDown(e, element.id)} />
                <button onClick={() => cancelSaving(element.id)}>Отменить</button>
                <button onClick={() => setTaskValue(element.id)}>Сохранить</button>
              </Li>)
          })}
        </ul>
      </WrapTask>
    </>
  )

}
