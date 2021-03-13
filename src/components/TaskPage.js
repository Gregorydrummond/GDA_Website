import { useState, useEffect } from 'react'
import Header from "./Header" 
import Tasks from "./Tasks"
import AddTask from './AddTask'

const TaskPage = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        const getTask = async () => {
            const taskFromServer = await fetchTasks();
            setTask(taskFromServer);
        }

        getTask();
    }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    }

    //Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    }

    //Add task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTask([...tasks, data])
    }

    //Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTask(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = {... taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json();

        setTask(
            tasks.map((task) => 
            task.id === id ? {... task, reminder: !task.reminder} : task
            )
        )
    }

    return (
        <div className="taskPageContainer">
            <Header 
                name={"Greg"}
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
      </div>
    )
}

export default TaskPage
