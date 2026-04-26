import { useState, useEffect } from 'react'
import Tabs from './components/Tabs'
import WorkoutForm from './components/WorkoutForm'
import WorkoutHistory from './components/WorkoutHistory'

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
      <h1>Fitness Tracker</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'log' && <WorkoutForm onAdd={handleAdd} />}
      {activeTab === 'history' && <WorkoutHistory workouts={workouts} onDelete={handleDelete} />}
    </div>
  )
}

export default App