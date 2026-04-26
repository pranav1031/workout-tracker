import React from 'react';
import { useState } from 'react';

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <p>Total workouts: {workouts.length}</p>
    </div>
  )
}

export default App