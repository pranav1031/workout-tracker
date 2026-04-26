import React from 'react'

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className='tabs'>
      <button 
        onClick={() => setActiveTab('log')}
        className={activeTab === 'log' ? 'active' : ''}
      >
        Log Workout
      </button>
      <button 
        onClick={() => setActiveTab('history')}
        className={activeTab === 'history' ? 'active' : ''}
      >
        History
      </button>
    </div>
  )
}

export default Tabs