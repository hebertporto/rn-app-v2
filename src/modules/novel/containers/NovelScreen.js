import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'

class NovelScrenn extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <View>
        <Text> Novel Screen </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(NovelScrenn)
