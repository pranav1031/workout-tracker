const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(__dirname, 'workouts.json')

function loadWorkouts() {
  if (!fs.existsSync(DATA_FILE)) return []
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
}

function saveWorkouts(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
}

app.get('/workouts', (req, res) => {
  res.json(loadWorkouts())
})

app.post('/workouts', (req, res) => {
  const workouts = loadWorkouts()
  const newWorkout = { id: Date.now(), ...req.body }
  workouts.push(newWorkout)
  saveWorkouts(workouts)
  res.json(newWorkout)
})

app.delete('/workouts/:id', (req, res) => {
  let workouts = loadWorkouts()
  workouts = workouts.filter(w => w.id !== Number(req.params.id))
  saveWorkouts(workouts)
  res.json({ success: true })
})

app.listen(3001, () => console.log('Server running on http://localhost:3001'))