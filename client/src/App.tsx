import * as React from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

interface Activity {
  id: string
  title: string
  date: string
  description: string
  category: string
  city: string
  venue: string
}

function App() {
  const [activities, setActivities] =
    React.useState<null | Array<Activity>>(null)

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/api/activities')
      .then((res) => {
        setActivities(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities ? (
          activities.map((a) => {
            return <List.Item key={a.id}>{a.title}</List.Item>
          })
        ) : (
          <p>No activities!</p>
        )}
      </List>
    </div>
  )
}

export default App
