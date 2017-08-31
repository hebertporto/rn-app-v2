import { Navigation } from 'react-native-navigation'

import MainScreen from '../modules/main/containers/MainScreen'
import NovelScreen from '../modules/novel/containers/NovelScreen'
import ChapterScreen from '../modules/novel/containers/ChapterScreen'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('main', () => MainScreen, store, Provider)
  Navigation.registerComponent('novel', () => NovelScreen, store, Provider)
  Navigation.registerComponent('chapter', () => ChapterScreen, store, Provider)
}
