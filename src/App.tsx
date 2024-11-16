import { GlobalStyle, TitleS, Wrap } from './style/style'
import { TasksFilter } from './components/TasksFilter';
import { InputNewTask } from './components/InputNewTask';
import { TasksList } from './components/TasksList';
import { NumberOfTasks } from './components/NumberOfTasks';



function App() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <TitleS>Список задач</TitleS>
        <InputNewTask />
        <TasksFilter />
        <NumberOfTasks />
        <TasksList />
      </Wrap>
    </>
  );
}

export default App;
