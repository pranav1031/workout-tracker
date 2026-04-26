import { useState, useEffect } from 'react'
import Tabs from './components/Tabs'

function App() {
  const [workouts, setWorkouts] = useState([])
  const [activeTab, setActiveTab] = useState('log')

  useEffect(() => {
    fetch('http://localhost:3001/workouts')
      .then(res => res.json())
      .then(data => setWorkouts(data))
  }, [])

  return (
    <div className="app">
      <h1>Fitness Tracker</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App