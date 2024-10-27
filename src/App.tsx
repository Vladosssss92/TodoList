import { useState } from 'react';
import { GlobalStyle, TitleS } from './style/style'
import { TasksFilter } from './components/TasksFilter';
import { InputNewTask } from './components/InputNewTask';
import { TasksList } from './components/TasksList';

export interface ITask {
  id: string;
  task: string;
  completed: boolean;
  editTask: boolean;
}

function App() {
  const [taskArray, setTaskArray] = useState<ITask[]>([]);

  return (
    <>
      <GlobalStyle />
      <TitleS>Список задач</TitleS>
      <InputNewTask setTaskArray={setTaskArray} />
      <TasksFilter />
      <TasksList setTaskArray={setTaskArray} taskArray={taskArray} />
    </>
  );
}

export default App;
