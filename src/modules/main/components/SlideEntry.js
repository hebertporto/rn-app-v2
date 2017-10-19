import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './../styles/SliderEntry.style'
import LinearGradient from 'react-native-linear-gradient'

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image () {
    const { data: { cover_url, name } } = this.props

    return (
      <Image style={styles.parallaxContainer} source={{ uri: cover_url }}>
        <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']} style={styles.gradientContainer} />
        <Text style={styles.title}>
          {name}
        </Text>
      </Image>
    )
  }

  render () {
    const { even, data, clickScreen } = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => clickScreen(data)}
        >
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          { this.image }
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
      </TouchableOpacity>
    )
  }
}
