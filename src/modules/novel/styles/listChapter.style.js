import { StyleSheet } from 'react-native'

const hm = 8

export default StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hm * 2,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
    flex: 1
  },
  imageContainer: {
    marginRight: hm * 2
  },
  textContainer: {
    justifyContent: 'center'
  },
  nameText: {
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    color: 'black'
  },
  descriptionText: {
    fontSize: 16,
    flex: 1,
    color: 'black'
  },
  iconContainer: {
    paddingLeft: 16,
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 20,
    fontWeight: '600'
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
  headerWrapper: {
    flex: 1
  },
  chapterTitle: {
    flex: 1
  }
})
