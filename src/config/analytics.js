import Analytics from 'analytics-react-native'
import DeviceInfo from 'react-native-device-info'

const analytics = new Analytics('6dHHr85qeEpIrikZCDP8gnNjue4bCsZE')

export function sendAnalyticsData (eventTracking) {
  analytics.track({
    userId: DeviceInfo.getUniqueID(),
    event: eventTracking
  })
}
