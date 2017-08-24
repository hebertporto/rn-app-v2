import { Navigation } from 'react-native-navigation'

import MainScreen from '../modules/main/containers/MainScreen'

export function registerScreens () {
  Navigation.registerComponent('main', () => MainScreen)
}
