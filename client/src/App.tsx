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
    if (!activities) {
      axios
        .get('http://localhost:5000/api/activities')
        .then((res) => {
          setActivities(res.data)
        })
    }
  }, [activities])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities
          ? activities.map((a: Activity) => {
              return <List.Item key={a.id}>{a.title}</List.Item>
            })
          : null}
      </List>
    </div>
  )
}

export default App
