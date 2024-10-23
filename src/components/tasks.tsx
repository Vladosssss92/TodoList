import React, { useState, useContext, FC } from "react";
import styled from "styled-components";
import ContextInput from "./inputTask";

const WrapFilterTask = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 10px 20px;
`

const Tasks: FC = () => {
  const [task, setTask] = useState(['число']);
  // const context = useContext(ContextInput);

  // console.log(context);
  const buttonClick = () => {
    if (task) {
      const arrayTask = [...task, '123'];
      setTask(arrayTask)
    }
  }
  return (
    <>
      <WrapFilterTask>
        <ul>
          {task.map(elem => {
            return (<li>
              {elem}
              <button>Изменить</button>
              <button>Удалить</button>
            </li>)
          })}
        </ul>
        <button onClick={buttonClick}>wwwww</button>

      </WrapFilterTask>
    </>
  )

}

export default Tasks
