import React, { Component } from 'react'

import {
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import { Card, Button } from 'nachos-ui'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles, { themeCustomBotton, newCardTheme } from './../styles/listChapter.style'

export default class ListNovels extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      hideFullDescription: true,
      description: '',
      textToogle: 'VER MAIS'
    }
    this._renderItemList = this._renderItemList.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
    this._toogleText = this._toogleText.bind(this)
    this._renderDescription = this._renderDescription.bind(this)
  }

  componentWillMount () {
    const { data } = this.props
    this.setState({
      data
    })
    this._renderDescription()
  }

  async _toogleText () {
    await this.setState((prevState) => {
      return { hideFullDescription: !prevState.hideFullDescription };
    })
    this._renderDescription()
  }

  async _renderDescription () {
    const description = this.props.novel.description

    if (this.state.hideFullDescription) {
      await this.setState({
        description: `${description.slice(0, 100)}...`,
        textToogle: 'VER MAIS'
      })
      return
    }
    await this.setState({
      description,
      textToogle: 'VER MENOS'
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderItemList (item) {
    const { clickScreen } = this.props
    return (
      <TouchableOpacity onPress={clickScreen}>
        <View style={styles.listItem}>
          <View style={styles.imageContainer}>
            <Text> {item.number} </Text>
          </View>
          <View style={styles.chapterTitle}>
            <Text>{item.title} </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderHeader () {
    const { novel } = this.props
    const { textToogle, description } = this.state
    const textTitle = (
      <View style={styles.titleContainer}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} style={styles.gradientContainer} />
        <Text style={styles.title} numberOfLines={2}>{novel.name}</Text>
      </View>
    )
    const footer = (
      <View style={styles.footerContainer}>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='copyright' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}> {novel.author} </Text>
        </View>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='translate' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}> {novel.translation_team} </Text>
        </View>
      </View>
    )

    return (
      <View style={styles.headerWrapper}>
        <Card
          image={novel.cover_url}
          bodyContent={textTitle}
          footerContent={footer}
          theme={newCardTheme}
          style={{
            backgroundColor: 'white'
          }}
        />
        <View style={styles.textContainerDescription}>
          <Text style={styles.textStyleDescription}>
            {description}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            type='naked'
            kind='rounded'
            iconName='md-eye'
            iconColor='rgba(179, 177, 177, 0.8)'
            iconPosition='left'
            iconSize={16}
            theme={themeCustomBotton}
            onPress={this._toogleText}
          >
            {textToogle}
          </Button>
        </View>
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
