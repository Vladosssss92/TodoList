import React, { FC, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ButtonS, InputS, WrapInputTask } from "../style/style";
import { useDispatch } from "react-redux";
import { addNewTask } from "./store";


export const InputNewTask: FC = () => {
  const [inputTaskValue, setInputTask] = useState('');
  const dispatch = useDispatch()

  const inputAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const handleAddTask = () => {
    if (!inputTaskValue.trim()) {
      setInputTask('')
    } else {
      dispatch(addNewTask({ id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }));
      setInputTask('')
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' && !inputTaskValue.trim()) {
      setInputTask('')
    } else if (e.key === 'Enter') {
      dispatch(addNewTask({ id: uuidv4(), task: inputTaskValue, completed: false, editTask: false }));
      setInputTask('')
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
