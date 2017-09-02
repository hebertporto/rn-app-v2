import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel'
import styles from './../styles/SliderEntry.style'

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image () {
    const { data: { illustration }, parallax, parallaxProps, even } = this.props

    return (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        style={[styles.image, { position: 'relative' }]}
        parallaxFactor={0.35}
        showSpinner
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    )
  }

  render () {
    const { even } = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${even}'`) }}
        >
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          { this.image }
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
      </TouchableOpacity>
    )
  }
}
