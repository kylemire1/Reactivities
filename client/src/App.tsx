import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    if (!activities.length) {
      axios.get('http://localhost:5000/api/activities').then((res) => {
        setActivities(res.data)
      })
    }
  }, [activities])

  return (
    <div className='App'>
      <pre>{JSON.stringify(activities, null, 2)}</pre>
    </div>
  )
}

export default App
