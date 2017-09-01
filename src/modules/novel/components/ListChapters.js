import React, { Component } from 'react'

import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Card, themeManager } from 'nachos-ui'
import LinearGradient from 'react-native-linear-gradient'

import styles from './../styles/listChapter.style'

const cardTheme = themeManager.getStyle('Card')

const newCardTheme = {
  ...cardTheme,
  CARD_FOOTER_HEIGHT: 60
}

themeManager.setSource('Card', () => (newCardTheme))

export default class ListNovels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    this._renderItemList = this._renderItemList.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
  }

  componentWillMount () {
    const { data } = this.props
    this.setState({
      data
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItemList () {
    const { clickScreen } = this.props
    return (
      <TouchableOpacity onPress={clickScreen}>
        <View style={styles.listItem}>
          <View style={styles.imageContainer}>
            <Text> 1 </Text>
          </View>
          <View style={styles.chapterTitle}>
            <Text>Capítulo Capítulo Capítulo Capítulo Capítulo Capítulo Capítulo</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderHeader () {
    const { novel } = this.props
    const text = (
      <View style={styles.titleContainer}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']} style={styles.gradientContainer} />
        <Text style={styles.title} numberOfLines={1}>{novel.title}</Text>
      </View>
    )
    const footer = (
      <View style={styles.footerContainer}>
        <View style={styles.footerElementWrapper}>
          <Text> % </Text>
          <Text numberOfLines={1} style={styles.footerText}> Paçoca Fubá </Text>
        </View>
        <View style={styles.footerElementWrapper}>
          <Text> % </Text>
          <Text numberOfLines={1} style={styles.footerText}> Jose Barros </Text>
        </View>
      </View>
    )

    return (
      <View style={styles.headerWrapper}>
        <Card
          image={novel.image}
          bodyContent={text}
          footerContent={footer}
          style={{
            backgroundColor: 'white'
          }}
        />
      </View>
    )
  }

  render () {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemList}
        ListHeaderComponent={this._renderHeader}
      />
    )
  }
}
