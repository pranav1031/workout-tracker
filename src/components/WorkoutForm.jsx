import React, { useState } from 'react'

const EXERCISES = {
  Chest: ['Bench Press', 'Push Ups', 'Incline Dumbbell Press', 'Cable Flyes', 'Chest Dips'],
  Back: ['Pull Ups', 'Deadlift', 'Bent Over Row', 'Lat Pulldown', 'Seated Cable Row'],
  Legs: ['Squat', 'Leg Press', 'Lunges', 'Leg Curl', 'Calf Raises', 'Romanian Deadlift'],
  Shoulders: ['Overhead Press', 'Lateral Raises', 'Front Raises', 'Shrugs', 'Arnold Press'],
  Arms: ['Bicep Curl', 'Tricep Pushdown', 'Hammer Curl', 'Skull Crushers', 'Preacher Curl'],
  Core: ['Plank', 'Crunches', 'Leg Raises', 'Russian Twists', 'Cable Crunch'],
}

const WorkoutForm = ({ onAdd }) => {
  const [bodyPart, setBodyPart] = useState('Chest')
  const [exercise, setExercise] = useState(EXERCISES["Chest"][0])
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  const handleBodyPartChange = (e) => {
    const part = e.target.value;
    setBodyPart(part);
    setExercise(EXERCISES[part][0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = { date, bodyPart, exercise, sets, reps, weight };

    fetch('http://localhost:3001/workouts', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkout)
    })
      .then(res => res.json())
      .then(saved => {
        onAdd(saved)
        setSets("")
        setReps("")
        setWeight("")
      })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Date</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Body Part</label>
        <select value={bodyPart} onChange={handleBodyPartChange}>
          {Object.keys(EXERCISES).map(part => (
            <option key={part}>{part}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Exercise</label>
        <select value={exercise} onChange={e => setExercise(e.target.value)}>
          {EXERCISES[bodyPart].map(ex => (
            <option key={ex}>{ex}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Sets</label>
          <input type="number" value={sets} onChange={e => setSets(e.target.value)} required min="1" />
        </div>
        <div className="form-group">
          <label>Reps</label>
          <input type="number" value={reps} onChange={e => setReps(e.target.value)} required min="1" />
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} min="0" />
        </div>
      </div>

      <button type="submit" className="submit-btn">Log Workout</button>
    </form>
  )
}

export default WorkoutForm
