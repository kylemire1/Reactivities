import * as React from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

function App() {
  const [activities, setActivities] = React.useState([])

  React.useEffect(() => {
    if (!activities.length) {
      axios.get('http://localhost:5000/api/activities').then((res) => {
        setActivities(res.data)
      })
    }
  }, [activities])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {!!activities.length
          ? activities.map((a: any) => {
              return <List.Item key={a.id}>{a.title}</List.Item>
            })
          : null}
      </List>
    </div>
  )
}

export default App
