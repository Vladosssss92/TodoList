import { useEffect, useState } from 'react';
import { GlobalStyle, TitleS } from './style/style'
import { TasksFilter } from './components/TasksFilter';
import { InputNewTask } from './components/InputNewTask';
import { TasksList } from './components/TasksList';
import { NumberOfTasks } from './components/NumberOfTasks';

export interface ITask {
  id: string;
  task: string;
  completed: boolean;
  editTask: boolean;
}



function App() {
  const [taskArray, setTaskArray] = useState<ITask[]>([]);
  const [filterTasks, setFilterTasks] = useState<'done' | 'all' | 'active'>('all');


  localStorage.setItem('tasks', JSON.stringify(taskArray))
  const taskArrayFromLocalStorage = JSON.parse(localStorage.getItem('tasks'))
  console.log(taskArrayFromLocalStorage);
  return (
    <>
      <GlobalStyle />
      <TitleS>Список задач</TitleS>
      <InputNewTask setTaskArray={setTaskArray} />
      <TasksFilter setFilterTasks={setFilterTasks} />
      <NumberOfTasks taskArray={taskArray}></NumberOfTasks>
      <TasksList setTaskArray={setTaskArray} taskArray={taskArrayFromLocalStorage} filterTasks={filterTasks} />
    </>
  );
}

export default App;
