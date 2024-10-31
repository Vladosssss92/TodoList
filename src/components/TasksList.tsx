import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { LiS, InputS, ButtonS, WrapButtons } from "../style/style";
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

  const taskStatus = (id: string) => {
    setTaskArray(prev => {
      return prev.map((element) => {
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
    })
  }

  const setTaskValue = (id: string) => {
    setTaskArray(prev => {
      return prev.map((element) => {
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
