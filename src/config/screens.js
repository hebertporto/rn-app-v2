import { Navigation } from 'react-native-navigation'

import MainScreen from '../modules/main/containers/MainScreen'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('main', () => MainScreen, store, Provider )
}
