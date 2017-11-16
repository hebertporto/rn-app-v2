import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textStyle: {
    padding: 10,
    marginBottom: 50,
    justifyContent: 'center',
    textAlign: 'justify',
    fontSize: 16,
    lineHeight: 20,
    color: 'black'
  },
  iconStyle: {
    paddingBottom: 5,
    paddingLeft: 5
  },
  textStyleHeader: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    lineHeight: 20
  },
  viewHeaderStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  titleStyle: {
    fontSize: 26,
    color: 'black'
  },
  subTitleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 10
  },
  divider: {
    backgroundColor: 'rgba(0,0,0,.12)',
    height: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10
  },
  info: {
    paddingLeft: 10
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingTop: 4,
    paddingBottom: 4
  },
  viewContainerText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
