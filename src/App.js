import Input from './components/Input';
import Todo from './components/Todo';
import Cta from './components/Cta';
import moon from './assets/images/icon-moon.svg';
import sun from './assets/images/icon-sun.svg';
import './styles.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useWindowResizer } from './hooks/useWindowResizer';

function App() {

  const [tasks, setTasks] = useState([
    { id: '1', name: "Complete online JavaScript course", completed: true },
    { id: '2', name: "Jog around the park 3x", completed: false },
    { id: '3', name: "10 minutes meditation", completed: false },
    { id: '4', name: "Read for 1 hour", completed: false },
    { id: '5', name: "Pick up groceries", completed: false },
    { id: '6', name: "Complete Todo App on Frontend Mentor", completed: false }
  ]);

  const [name, setName] = useState('');
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const openTasks = tasks.filter((task) => !task.completed);
  const isMobile = useWindowResizer();
  
  const addTask = (name) => {
    const newTask = { id: nanoid(), name, completed: false };
    setTasks([...tasks, newTask])
  };

  const deleteTask = (id) => {
    const newTaskList = tasks.filter(task => task.id !== id)
    setTasks(newTaskList)
  };

  const handleChange = (e) => {
    setName(e.target.value)
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    addTask(name);
    e.target.reset();
  };

  const handleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeCompletedTasks = () => {
    const openTasks = tasks.filter(task => !task.completed)
    setTasks(openTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'closed') {
      return task.completed;
    } else {
      return !task.completed;
    }
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    setTasks(reorder(tasks, source.index, destination.index));
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  };

  return (
    <div className={`${theme} ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
      <header className='header__wrapper'>
        <div className="header">
          <h1 className='header__title'>TODO</h1>
          <button onClick={toggleTheme}>
            {theme === 'light' ?
            <img src={moon} alt="" /> :
            <img src={sun} alt="" />}
          </button>
        </div>
      </header>

      <main>
        {/* INPUT COMPONENT */}
        <Input 
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
        />
        {/* INPUT COMPONENT */}
        {/* TODO COMPONENT */}
        <Todo 
          tasks={filteredTasks}
          deleteTask={deleteTask}
          handleComplete={handleComplete}
          onDragEnd={handleDragEnd}
      />
        {/* TODO COMPONENT */}

        {/* CTA COMPONENT */}
        <Cta 
          removeCompletedTasks={removeCompletedTasks}
          filter={filter}
          setFilter={setFilter}
          openTasks={openTasks}
          isMobile={isMobile}
        />
        {/* CTA COMPONENT */}

      </main>
    </div>
  );
}

export default App;
