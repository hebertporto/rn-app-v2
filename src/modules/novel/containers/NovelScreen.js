import React, { Component } from 'react'

import { Text, View, FlatList, TouchableOpacity } from 'react-native'

import { fetchNovelById } from '../../main/actions/index'

import { connect } from 'react-redux'

import navigatorStyle from './../../theme/navigationBarStyle'
import _ from 'lodash'
import { sendAnalyticsData } from './../../../config/analytics'

import { Card, Button } from 'nachos-ui'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles, { themeCustomBotton, newCardTheme } from './../styles/listChapter.style'
// let reorderIcon

class NovelScreen extends Component {
  static navigatorStyle = navigatorStyle
  // static navigatorButtons = {
  //   rightButtons: [
  //     {
  //       title: '0->9',
  //       id: 'edit',
  //       testID: 'e2e_rules',
  //       showAsAction: 'ifRoom',
  //       buttonColor: 'white',
  //       buttonFontSize: 16,
  //       buttonFontWeight: '600'
  //     },
  //     {
  //       icon: reorderIcon,
  //       id: 'add'
  //     }
  //   ]
  // }

  constructor (props) {
    super(props)
    this.state = {
      data: [],
      fullData: [],
      novel: {},
      hideFullDescription: true,
      description: '',
      textToogle: 'VER MAIS',
      lastChapter: { number: 0, title: '' }
    }
    this.goToChapterScreen = this.goToChapterScreen.bind(this)
    this._renderItemList = this._renderItemList.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
    this._toogleText = this._toogleText.bind(this)
    this._renderDescription = this._renderDescription.bind(this)
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }

  componentWillMount () {
    const { author, cover_url, name, description, translation_team, _id } = this.props
    this.setState({
      novel: {
        author,
        description,
        name,
        _id,
        cover_url,
        translation_team
      }
    })
  }

  componentDidMount () {
    const { fetchNovelById } = this.props
    const { _id } = this.props
    fetchNovelById(_id)
    sendAnalyticsData(this.state.novel.name)
    this._renderDescription()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: _.reverse(nextProps.chapters),
      lastChapter: nextProps.chapters.length > 0 ? nextProps.chapters[nextProps.chapters.length - 1] : { number: 0, title: '' }
    })
  }

  // onNavigatorEvent = (event) => {
  //   if (event.type === 'NavBarButtonPress') {
  //     const { data } = this.state
  //     const reorder = _.reverse(data)
  //     this.setState({
  //       data: reorder
  //     })
  //   }
  // }

  loadMoreChapters = () => {
    const { data, fullData } = this.state
    const numberTotal = fullData.length - data.length
    const loadData = numberTotal > 50 ? fullData.slice(0, data.length + 50) : fullData

    this.setState({
      data: loadData
    })
  }

  goToChapterScreen (chapter) {
    this.props.navigator.push({
      screen: 'chapter',
      title: `${chapter.number} - ${chapter.title}`,
      passProps: {
        novelName: this.state.novel.name,
        chapterId: chapter._id
      }
    })
  }
  _renderFooter = () => {
    return (
      <View>
        <Button
          kind='rounded'
          iconName='md-eye'
          iconColor='rgba(179, 177, 177, 0.8)'
          iconPosition='left'
          iconSize={28}
          onPress={this.loadMoreChapters}
        >
            Load More
        </Button>
      </View>
    )
  }

  async _toogleText () {
    await this.setState((prevState) => {
      return { hideFullDescription: !prevState.hideFullDescription }
    })
    this._renderDescription()
  }

  async _renderDescription () {
    const description = this.state.novel.description

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

  _keyExtractor = (item, index) => item._id;

  _renderItemList (data) {
    const { item } = data
    return (
      <TouchableOpacity onPress={() => this.goToChapterScreen(item)}>
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
    const { novel, textToogle, description, lastChapter } = this.state
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
        <View style={styles.footerElementWrapper}>
          <Text> <Icon name='note' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={styles.footerText}>
            Último capítulo: {lastChapter.number} - {lastChapter.title.slice(0, 20)}
            {lastChapter.title.length > 20 ? '...' : ''}
          </Text>
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
            iconSize={28}
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
    const { data } = this.state
    return (
      <View>
        <FlatList
          data={data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItemList}
          ListHeaderComponent={this._renderHeader}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chapters: state.main.chapters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNovelById: (id) => dispatch(fetchNovelById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelScreen)
