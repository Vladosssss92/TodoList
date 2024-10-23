import React, { FC, useState, useContext, createContext } from "react";
import styled from "styled-components";
import FilterTask from "./filterTasks";

export const ContextInput = createContext({});

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
  const [inputTaskValue, setInputTask] = useState('');
  const [addNewTask, setAddNewTask] = useState('')

  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const handleAddTask = () => {
    if (inputTaskValue) {
      setAddNewTask(inputTaskValue);
      setInputTask('')
    }
  }

  return (
    <ContextInput.Provider value={addNewTask}>
      <Wrap>
        <TitleS>Список задач</TitleS>
        <WrapInputTask>
          <input
            type="text"
            value={inputTaskValue}
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