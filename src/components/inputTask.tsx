import React, { FC, useState, createContext } from "react";
import styled from "styled-components";
import FilterTask from "./filterTasks";

export const ContextInput = createContext('');

const Wrap = styled.div`
`

const TitleS = styled.h1`
  color: #539153;
  font-size: 50px;
  text-align: center;
  padding: 10px;
`

const WrapInputTask = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
`

const InputTask: FC = () => {
  const [inputTask, setInputTask] = useState('');


  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)

  }

  const handleAddTask = () => {
    console.log(inputTask);
    setInputTask('')
  }

  return (
    <ContextInput.Provider value={inputTask}>
      <Wrap>
        <TitleS>Список задач</TitleS>
        <WrapInputTask>
          <input
            type="text"
            value={inputTask}
            placeholder="Введите задачу..."
            onChange={inputAddTask}
          />
          <button onClick={handleAddTask}>Добавить задачу</button>
        </WrapInputTask>
        <FilterTask />
      </Wrap>
    </ContextInput.Provider>
  )
}

export default InputTask