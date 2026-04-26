import { useState, useEffect } from 'react'
import Tabs from './components/Tabs'
import WorkoutForm from './components/WorkoutForm'
import WorkoutHistory from './components/WorkoutHistory'
import './index.css'

function App() {
  const [workouts, setWorkouts] = useState([])
  const [activeTab, setActiveTab] = useState('log')

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then(res => res.json())
      .then(data => setWorkouts(data))
  }, [])

  function handleAdd(saved) {
    setWorkouts([...workouts, saved])
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/workouts/${id}`, { method: 'DELETE' })
      .then(() => setWorkouts(workouts.filter(w => w.id !== id)))
  }

  return (
    <div className="app">
      <h1>Fitness <span>Tracker</span></h1>
      <p className="subtitle">Track your gains. Every rep counts.</p>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'log' && <WorkoutForm onAdd={handleAdd} />}
      {activeTab === 'history' && <WorkoutHistory workouts={workouts} onDelete={handleDelete} />}
    </div>
  )
}

export default App