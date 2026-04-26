import React from 'react';


const WorkoutHistory = ({ workouts, onDelete }) => {
  const grouped = workouts.reduce((acc, w) => {
    if (!acc[w.date]) acc[w.date] = []
    acc[w.date].push(w)
    return acc
  }, {})

  const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a))

  if (workouts.length === 0) return <p>No workouts logged yet!</p>

  return (
    <div className="history">
      {sortedDates.map(date => (
        <div key={date} className="day-group">
          <h3>{date}</h3>
          {grouped[date].map(w => (
            <div key={w.id} className="workout-item">
              <span className="body-part">{w.bodyPart}</span>
              <span className="exercise-name">{w.exercise}</span>
              <span>{w.sets} sets × {w.reps} reps {w.weight ? `@ ${w.weight}kg` : ''}</span>
              <button onClick={() => onDelete(w.id)} className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default WorkoutHistory