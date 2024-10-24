import React, { FC, useState, createContext } from "react";
import FilterTask from "./filterTasks";
import { v4 as uuidv4 } from 'uuid';
import { Wrap, TitleS, WrapInputTask } from "../style/style";

export const ContextInput = createContext({ id: '0', task: '', completed: false });

const InputTask: FC = () => {
  const [inputTaskValue, setInputTask] = useState('');
  const [addNewTask, setAddNewTask] = useState({ id: '0', task: '', completed: false, editTask: false })

  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const handleAddTask = (e) => {
    console.log(e);
    if ((inputTaskValue && e.key === 'Enter') || (inputTaskValue && e.type === 'click')) {
      setAddNewTask({ id: uuidv4(), task: inputTaskValue, completed: false, editTask: false });
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
            onKeyDown={handleAddTask}
          />
          <button onClick={handleAddTask} >Добавить задачу</button>
        </WrapInputTask>
      </Wrap>
      <FilterTask />
    </ContextInput.Provider>
  )
}

export default InputTask