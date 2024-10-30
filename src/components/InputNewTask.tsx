import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ButtonS, InputS, WrapInputTask } from "../style/style";
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
    if (!inputTaskValue.trim()) {
      setInputTask('')
    } else {
      setTaskArray(prev => [...prev, { id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }]);
      setInputTask('')
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      if (!inputTaskValue.trim()) {
        setInputTask('')
      } else {
        setTaskArray(prev => [...prev, { id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }]);
        setInputTask('')
      }
    }
    if (e.key === 'Escape') {
      setInputTask('')
    }
  }

  return (
    <WrapInputTask>
      <InputS
        type="text"
        value={inputTaskValue}
        placeholder="Введите задачу..."
        onChange={inputAddTask}
        onKeyDown={onKeyDown}
      />
      <ButtonS onClick={handleAddTask} >Добавить задачу</ButtonS>
    </WrapInputTask>
  )
}
