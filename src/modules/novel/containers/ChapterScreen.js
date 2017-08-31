import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'

class ChapterScreen extends Component {
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
