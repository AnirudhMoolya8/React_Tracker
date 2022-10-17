import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';


const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Task1",
        "other": "no-show",
        "day": "monday",
        "reminder": true
      },
      {
        "text": "Task2",
        "day": "Wednesday",
        "reminder": false,
        "id": 2
      },
      {
        "text": "Task3",
        "day": "Thursday",
        "reminder": true,
        "id": 3
      }
    ]
  )

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }






  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> :
        "No tasks to display"}
    </div>
  );
}

export default App;
