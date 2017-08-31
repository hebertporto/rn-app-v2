import React, { Component } from 'react'

import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Card, themeManager } from 'nachos-ui'

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
          <View style={{ flex: 1 }}>
            <Text>Capítulo Capítulo Capítulo Capítulo Capítulo Capítulo Capítulo</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderHeader () {
    const { novel } = this.props
    const text = (<Text style={{ color: 'white', bottom: 0 }}>{novel.title}</Text>)

    const footer = (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginTop: 10
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}>
          <Text> % </Text>
          <Text numberOfLines={1} style={{flexDirection: 'row', paddingBottom: 5, lineHeight: 20}}> Paçoca Fubá </Text>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}>
          <Text> % </Text>
          <Text numberOfLines={1} style={{flexDirection: 'row', paddingBottom: 5, lineHeight: 20}}> Jose Barros </Text>
        </View>
      </View>
    )

    return (
      <View style={{ flex: 1 }}>
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
