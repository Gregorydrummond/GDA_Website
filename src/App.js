import { useState } from 'react'
import Header from "./components/Header" 
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'March 7th, 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Homework Assignment',
      day: 'March 12th, 2021',
      reminder: true
    },
    {
      id: 3,
      text: 'Watch Snowfall',
      day: 'March 10th, 2021',
      reminder: false
    }
])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTask([...tasks, newTask]);
  }

  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) => 
      task.id === id ? {... task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
        name={"Greg"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
