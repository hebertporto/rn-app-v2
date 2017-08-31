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
  }
})
