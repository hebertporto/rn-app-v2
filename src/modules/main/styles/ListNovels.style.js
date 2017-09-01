import {
  StyleSheet
} from 'react-native'

import { themeManager } from 'nachos-ui'

const cardTheme = themeManager.getStyle('Card')

export const customCardTheme = {
  ...cardTheme,
  CARD_MIN_HEIGHT: 172,
  CARD_FOOTER_HEIGHT: 60
}

export default StyleSheet.create({
  card: {
    margin: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { height: 1, width: 0 },
    shadowRadius: 1,
    backgroundColor: 'white'
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
  footerElementWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  footerText: {
    paddingBottom: 5,
    lineHeight: 20
  },
  gradientContainer: {
    height: 45,
    opacity: 0.6,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  title: {
    color: 'white',
    marginLeft: 5,
    marginBottom: 1,
    fontSize: 18,
    fontWeight: '600'
  }
})
