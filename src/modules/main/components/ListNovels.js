import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Card } from 'nachos-ui'

import styles, { customCardTheme } from './../styles/ListNovels.style'

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

  _keyExtractor = (item, index) => item._id;

  _renderItemList ({item}) {
    const text = (
      <View style={styles.titleContainer}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']} style={styles.gradientContainer} />
        <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
      </View>
    )
    const { changeScreen } = this.props

    const footer = (
      <View style={styles.footerContainer}>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='copyright' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}>
            {item.author}
          </Text>
        </View>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='translate' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}>
            {item.translation_team}
          </Text>
        </View>
      </View>
    )

    return (
      <TouchableOpacity onPress={changeScreen}>
        <Card
          theme={customCardTheme}
          image={item.cover_url}
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
    const { header } = this.props
    return (
      <FlatList
        ListHeaderComponent={header}
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemList}
      />
    )
  }
}
