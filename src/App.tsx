import './App.css';
import AddTask from './components/AddTask';
import styled from "styled-components"
import TaskCard from './components/TaskCard';
import { ITask } from './types/schema';
import { getAllTasks } from './store/task';
import { useSelector } from 'react-redux';

const Background = styled.div`
    background: #2b2b27;
    border-radius: 20px;
    min-height: 100vh;
    padding: 2% 0 2% 0;
  `

function App() {

  const tasks : ITask[] = Object.values(useSelector(getAllTasks));

  return (
    <div className="App">
      <Background> 
        <h2 style={{color: 'white'}}>My Todos</h2>
        <div style={{width: '80%', margin: 'auto'}}>
          <AddTask/>
          {tasks.map((task => (<TaskCard key={task.id} task={
            task
            }/>)))}
        </div>
      </Background>
    </div>
  );
}

export default App;
