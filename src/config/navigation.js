import { Navigation } from 'react-native-navigation'

const initialScreen = {
  screen: {
    screen: 'main'
  }
}

export function startApp () {
  Navigation.startSingleScreenApp(initialScreen);
}
