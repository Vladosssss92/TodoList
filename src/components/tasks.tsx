import React, { FC, useState, useEffect } from "react";
import { ContextInput } from "./inputTask";
import { WrapTask, Li } from "../style/style";

interface Iprops {
  allTasks: boolean,
  activeTasks: boolean,
  completedTasks: () => void
}

const Tasks: FC<Iprops> = ({ allTasks }) => {
  const taskOutputContext = React.useContext(ContextInput);
  const [taskArray, setTask] = useState([]);
  const [inputTaskValue, setInputTask] = useState('');

  useEffect(() => {
    setTask([...taskArray, taskOutputContext]);
  }, [taskOutputContext])

  const deleteTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    const updatedArrayAfterDeletionTask = taskArray.filter((num, index) => index !== +eventTarget.id)
    setTask(updatedArrayAfterDeletionTask)
  }

  const editTaskButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement
    taskArray[eventTarget.id].editTask = true
    setTask([...taskArray])
    setInputTask(taskArray[+eventTarget.id].task)
  }

  const inputEditTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  }

  const taskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskArray[+e.target.id].completed = e.target.checked
    setTask([...taskArray])
  }

  const setTaskValue = (e) => {
    const eventTarget = e.target as HTMLButtonElement;
    if (e.key === 'Enter' || e.type === 'click') {
      taskArray[eventTarget.id].task = inputTaskValue;
      taskArray[eventTarget.id].editTask = false;
      setTask([...taskArray])
    }
  }

  const cancelSaving = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    taskArray[eventTarget.id].editTask = false;
    setTask([...taskArray])
  }
  return (
    <>
      <WrapTask>
        <ul>
          {taskArray.map((elem, index) => {
            if (elem.task && !elem.editTask) {
              return (
                <Li key={elem.id}>
                  <label>
                    <input id={index.toString()} type="checkbox" checked={taskArray[index].completed} onChange={taskStatus} />
                    <p>{elem.task}</p>
                  </label>
                  <button id={index.toString()} onClick={editTaskButton}>Изменить</button>
                  <button id={index.toString()} onClick={deleteTaskButton}>Удалить</button>
                </Li>)
            }
            if (elem.task && elem.editTask) {
              return (
                <Li key={elem.id}>
                  <input id={index.toString()} value={inputTaskValue} onChange={inputEditTask} onKeyDown={setTaskValue} />
                  <button id={index.toString()} onClick={cancelSaving}>Отменить</button>
                  <button id={index.toString()} onClick={setTaskValue}>Сохранить</button>
                </Li>)
            };
          })}
        </ul>
      </WrapTask>
    </>
  )

}

export default Tasks
