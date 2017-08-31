import { StyleSheet, Platform, Dimensions } from 'react-native'

const { width: viewportWidth } = Dimensions.get('window')
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

// function wp (percentage) {
//   const value = (percentage * viewportWidth) / 100
//   return Math.round(value)
// }

// export const slideHeight = viewportHeight * 0.4
// export const slideWidth = wp(75)
// export const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = viewportWidth - 80

const entryBorderRadius = 8

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#E4F2EE',
  background2: '#21D4FD',
  white: 'white',
  teste: '#F4CBA2'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1,
    paddingTop: 50
  },
  scrollviewContentContainer: {
    paddingBottom: 50
  },
  exampleContainer: {
    marginBottom: 30
  },
  title: {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 5,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slide: {
    flexDirection: 'column',
    width: itemWidth,
    backgroundColor: 'yellow'
  },
  slider: {
    marginTop: 10
  },
  sliderContentContainer: {
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#6C7371'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
