import './App.css';
import AddTask from './components/AddTask';
import styled, {css} from "styled-components"
import TaskCard from './components/TaskCard';
import { ITask } from './types/schema';
import { store } from './store/store';

function App() {

  const tasks : ITask[] = Object.values(store.getState().task);

  const Background = styled.div`
    background: #2b2b27;
    border-radius: 20px;
    min-height: 60vh;
    padding: 2% 0 2% 0;
  `
  return (
    <div className="App">
      <Background> 
        <h2 style={{color: 'white'}}>My Todos</h2>
        <div style={{width: '80%', margin: 'auto'}}>
          <AddTask/>
          {tasks.map(((task : any) => (<TaskCard key={task.id}task={
            task
            }/>)))}
        </div>
      </Background>
    </div>
  );
}

export default App;
