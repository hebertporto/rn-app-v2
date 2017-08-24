import { registerScreens } from './screens'
import { startApp } from './navigation'

export function initializeApp () {
  registerScreens()
  startApp()
}