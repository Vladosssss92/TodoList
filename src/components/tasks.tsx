import React, { useState, FC, useEffect } from "react";
import styled from "styled-components";
import { ContextInput } from "./inputTask";

const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
`

const Tasks: FC = () => {
  const [task, setTask] = useState([]);
  const taskOutputContext = React.useContext(ContextInput);

  useEffect(() => {
    const arrayTask = [...task, taskOutputContext];
    setTask(arrayTask);

  }, [taskOutputContext])

  return (
    <>
      <WrapFilterTask>
        <ul>
          {task.map(elem => {
            if (elem) {
              return (
                <li>
                  <input type="checkbox"></input>
                  {elem}
                  <button>Изменить</button>
                  <button>Удалить</button>
                </li>)
            }
          })}
        </ul>
      </WrapFilterTask>
    </>
  )

}

export default Tasks
