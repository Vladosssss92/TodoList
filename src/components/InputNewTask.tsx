import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Wrap, WrapInputTask } from "../style/style";
import { ITask } from "../App";

interface IProps {
  setTaskArray: Dispatch<SetStateAction<ITask[]>>;
}

export const InputNewTask: FC<IProps> = ({ setTaskArray }) => {
  const [inputTaskValue, setInputTask] = useState('');
  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const handleAddTask = () => {
    setTaskArray(prev => [...prev, { id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }]);
    setInputTask('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      setTaskArray(prev => [...prev, { id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }]);
      setInputTask('')
    }
    if (e.key === 'Escape') {
      setInputTask('')
    }
  }


  return (
    <Wrap>
      <WrapInputTask>
        <input
          type="text"
          value={inputTaskValue}
          placeholder="Введите задачу..."
          onChange={inputAddTask}
          onKeyDown={onKeyDown}
        />
        <button onClick={handleAddTask} >Добавить задачу</button>
      </WrapInputTask>
    </Wrap>
  )
}
