import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ActivityList from './ActivityList'
import LoadingComponent from '../../../app/layout/LoadingComponent'

function ActivityDashboard() {
  const { activityStore } = useStore()
  const { loadActivities, activityRegistry } = activityStore

  React.useEffect(() => {
    if (activityRegistry.size <= 1) {
      loadActivities()
    }
  }, [activityRegistry.size, loadActivities])

  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading Activities' />

  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  )
}

export default observer(ActivityDashboard)
