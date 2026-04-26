# 💪 Workout Tracker

A full-stack workout tracking web app built with React and Node.js. Log your gym workouts by body part and exercise, track your history day by day, and never lose your data on refresh thanks to a persistent backend.

---

## Features

- Log workouts by body part (Chest, Back, Legs, Shoulders, Arms, Core)
- Pick from curated exercises for each body part
- Record sets, reps, and weight for every exercise
- View workout history grouped by date
- Delete any logged workout
- Data persists across page refreshes via a Node.js backend

---

## Tech Stack

**Frontend**
- React (via Vite)
- CSS with Google Fonts (Barlow & Barlow Condensed)

**Backend**
- Node.js
- Express.js
- JSON file storage (no database required)

---

## Project Structure

```
fitness-tracker/
├── src/
│   ├── components/
│   │   ├── Tabs.jsx           # Tab navigation (Log / History)
│   │   ├── WorkoutForm.jsx    # Form to log a new workout
│   │   └── WorkoutHistory.jsx # History list grouped by date
│   ├── App.jsx                # Root component, holds global state
│   └── index.css              # Global styles
├── server/
│   ├── index.js               # Express server with REST API
│   └── workouts.json          # Auto-generated data file
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/fitness-tracker.git
   cd fitness-tracker
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd server
   npm install
   cd ..
   ```

### Running the App

You need two terminals running simultaneously.

**Terminal 1 — Start the backend**
```bash
cd server
node index.js
```
Server runs at `http://localhost:3001`

**Terminal 2 — Start the frontend**
```bash
npm run dev
```
App runs at `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/workouts` | Fetch all workouts |
| POST | `/workouts` | Add a new workout |
| DELETE | `/workouts/:id` | Delete a workout by ID |

---

## How It Works

- The React frontend communicates with the Express backend using the `fetch` API
- Workouts are stored in `server/workouts.json` — this file is created automatically on first use
- State is managed in `App.jsx` and passed down to child components via props
- CORS is enabled on the backend to allow the frontend (port 5173) to talk to the server (port 3001)

---

## Future Improvements

- Add a database (MongoDB or PostgreSQL) to replace JSON file storage
- User authentication so multiple users can track their own workouts
- Progress charts to visualize improvement over time
- Personal records (PR) tracking per exercise

---

## License

MIT