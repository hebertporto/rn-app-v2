import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { registerScreens } from './screens'

import configureStore from './store/configureStore'

const store = configureStore()

registerScreens(store, Provider)

const initialScreen = {
  screen: {
    screen: 'main',
    title: 'Super Novel Reader',
    navigatorStyle: {
      navBarTextColor: '#FFFFFF',
      navBarBackgroundColor: '#2196F3',
      navBarTitleTextCentered: true
    }
  }
}

export function startApp () {
  Navigation.startSingleScreenApp(initialScreen)
}
