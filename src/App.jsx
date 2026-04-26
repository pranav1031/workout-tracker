import { useState, useEffect } from 'react'
import Tabs from './components/Tabs'
import WorkoutForm from './components/WorkoutForm'

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

  return (
    <div className="app">
      <h1>Workout Tracker</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'log' && <WorkoutForm onAdd={handleAdd} />}
    </div>
  )
}

export default App