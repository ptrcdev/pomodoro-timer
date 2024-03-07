import './App.css';
import NavBar from './NavBar';
import PomodoroTimer from './PomodoroTimer';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ToDoList />
      <PomodoroTimer />
    </div>
  );
}

export default App;
