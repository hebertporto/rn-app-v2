import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'
import navigatorStyle from './../../theme/navigationBarStyle'

class ChapterScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <View>
        <Text> Chapter Screen </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.main.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(getInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen)
