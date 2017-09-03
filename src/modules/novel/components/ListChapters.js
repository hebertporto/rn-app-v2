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
    // const { description } = this.props.novel
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus sagittis libero, ut porttitor magna venenatis in. Pellentesque suscipit sit amet eros id tincidunt. Proin placerat, nulla nec efficitur viverra, turpis quam viverra massa, vitae malesuada lectus erat vitae neque. Etiam dignissim at quam vel iaculis. Donec maximus pretium lacus vel efficitur. Aenean feugiat sollicitudin lobortis. Vivamus eget blandit tortor. Donec sit amet ante neque. Mauris ac metus eu nibh aliquam elementum eu facilisis est. Nam fringilla malesuada est, at eleifend justo consectetur sit amet. Duis ut turpis sed augue feugiat elementum ut ac libero. Phasellus lacinia enim at lacus posuere consectetur. Pellentesque at eros eu tortor tempor ultricies. Nullam ante mauris, vehicula quis porttitor vel, convallis id nulla. Aliquam at consequat neque. In vel ex a ex tincidunt cursus id at mauris.'

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

  _renderItemList () {
    const { clickScreen } = this.props
    return (
      <TouchableOpacity onPress={clickScreen}>
        <View style={styles.listItem}>
          <View style={styles.imageContainer}>
            <Text> 123 </Text>
          </View>
          <View style={styles.chapterTitle}>
            <Text>Capítulo Capítulo Capítulo Capítulo </Text>
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
        <Text style={styles.title} numberOfLines={2}>{novel.title}</Text>
      </View>
    )
    const footer = (
      <View style={styles.footerContainer}>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='closed-caption' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}> Paçoca Fubá </Text>
        </View>
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='spellcheck' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}> Jose Barros </Text>
        </View>
      </View>
    )

    return (
      <View style={styles.headerWrapper}>
        <Card
          image={novel.image}
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