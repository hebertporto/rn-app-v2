import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'

export default class LoadingSpinner extends Component {
  render () {
    const { spinnerColor, spinnerSize } = this.props
    return (
      <ActivityIndicator color={spinnerColor} size={spinnerSize} />
    )
  }
}

LoadingSpinner.PropTypes = {
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string
}

LoadingSpinner.defaultProps = {
  spinnerColor: null,
  spinnerSize: 'large'
}
