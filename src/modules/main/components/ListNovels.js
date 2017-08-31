import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Card, themeManager } from 'nachos-ui'

const cardTheme = themeManager.getStyle('Card')

const newCardTheme = {
  ...cardTheme,
  CARD_MIN_HEIGHT: 172,
  CARD_FOOTER_HEIGHT: 60
}

export default class ListNovels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    this._renderItemList = this._renderItemList.bind(this)
  }

  componentWillMount () {
    const { data } = this.props
    this.setState({
      data
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItemList ({item}) {
    const text = (<Text style={{ color: 'white', bottom: 0 }}>{item.text}</Text>)
    const { changeScreen } = this.props

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
      <TouchableOpacity onPress={changeScreen}>
        <Card
          theme={newCardTheme}
          image={item.image}
          bodyContent={text}
          footerContent={footer}
          imageStyle={{
            height: 110,
            ...StyleSheet.absoluteFillObject
          }}
          style={{
            margin: 8,
            elevation: 2,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { height: 1, width: 0 },
            shadowRadius: 1,
            backgroundColor: 'white'
          }}
        />
      </TouchableOpacity>
    )
  }

  render () {
    return (
      <FlatList
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemList}
      />
    )
  }
}
