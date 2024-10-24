import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { ContextInput } from "./inputTask";

interface Iprops {
  allTasks: boolean,
  activeTasks: boolean,
  completedTasks: () => void
}

let visibilityTask = 'block'

const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
`
const LiS = styled.li`
  display: ${visibilityTask};
`

const Tasks: FC<Iprops> = ({ allTasks }) => {
  const taskOutputContext = React.useContext(ContextInput);
  const [taskArray, setTask] = useState([]);

  if (allTasks) {
    visibilityTask = "block"
  } else {
    visibilityTask = 'none'
  }
  console.log(LiS.componentStyle.rules);
  console.log(visibilityTask);
  useEffect(() => {
    setTask([...taskArray, taskOutputContext]);
  }, [taskOutputContext])

  const deleteTaskBurron = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    const updatedArrayAfterDeletionTask = taskArray.filter((num, index) => index !== +eventTarget.id)
    setTask(updatedArrayAfterDeletionTask)
  }

  const taskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskArray[+e.target.id].completed = e.target.checked
    setTask([...taskArray])
  }

  return (
    <>
      <WrapFilterTask>
        <ul>
          {taskArray.map((elem, index) => {
            if (elem.task) {
              return (
                <LiS key={elem.id}>
                  <label>
                    <input id={index.toString()} type="checkbox" checked={taskArray[index].completed} onChange={taskStatus} />
                    {elem.task}
                  </label>
                  <button>Изменить</button>
                  <button id={index.toString()} onClick={deleteTaskBurron}>Удалить</button>
                </LiS>)
            };
          })}
        </ul>
      </WrapFilterTask>
    </>
  )

}

export default Tasks
