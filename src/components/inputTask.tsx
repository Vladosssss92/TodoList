import React, { FC, useState, createContext } from "react";
import styled from "styled-components";
import FilterTask from "./filterTasks";
import { v4 as uuidv4 } from 'uuid';

// interface contextTask {
//   id: string,
//   task: string,
//   completed: boolean
// }

export const ContextInput = createContext({ id: '0', task: '', completed: false });

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
  const [addNewTask, setAddNewTask] = useState({ id: '0', task: '', completed: false })

  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const handleAddTask = () => {
    if (inputTaskValue) {
      setAddNewTask({ id: uuidv4(), task: inputTaskValue, completed: false });
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
      </Wrap>
      <FilterTask />
    </ContextInput.Provider>
  )
}

export default InputTask