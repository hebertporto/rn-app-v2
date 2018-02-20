import React, {Component} from 'react'

import {
  View,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import OneSignal from 'react-native-onesignal'
import Carousel from 'react-native-snap-carousel'
import { getInfo, fetchNovels } from '../actions/index'
import { connect } from 'react-redux'
import SliderEntry from './../components/SlideEntry'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Card } from 'nachos-ui'
import If from './../../shared/If'
import LoadingSpinner from './../../shared/LoadingSpinner'
import navigatorStyle from './../../theme/navigationBarStyle'
import styles, { sliderWidth, itemWidth } from './../styles/style'
import { sendAnalyticsData } from './../../../config/analytics'

import stylesFlat, { customCardTheme } from './../styles/ListNovels.style'

// import SplashScreen from 'react-native-splash-screen'

class MainScrenn extends Component {
  static navigatorStyle = navigatorStyle
  state = {
    entries: [],
    data: [],
    loading: true,
    slider1ActiveSlide: 1
  }

  componentWillMount () {
    OneSignal.addEventListener('received', this.onReceived)
    OneSignal.addEventListener('opened', this.onOpened)
    OneSignal.addEventListener('registered', this.onRegistered)
    OneSignal.addEventListener('ids', this.onIds)
  }

  componentWillUnmount () {
    OneSignal.removeEventListener('received', this.onReceived)
    OneSignal.removeEventListener('opened', this.onOpened)
    OneSignal.removeEventListener('registered', this.onRegistered)
    OneSignal.removeEventListener('ids', this.onIds)
  }

  componentDidMount () {
    const { fetchNovels } = this.props
    fetchNovels()
    sendAnalyticsData('Main Screen')
    // SplashScreen.hide()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.novels,
      loading: false
    })
    if (nextProps.novels) {
      this.getFeaturedSlides(nextProps.novels)
    }
  }

  onReceived (notification) {
    console.log('Notification received: ', notification)
  }

  onOpened (openResult) {
    console.log('Message: ', openResult.notification.payload.body)
    console.log('Data: ', openResult.notification.payload.additionalData)
    console.log('isActive: ', openResult.notification.isAppInFocus)
    console.log('openResult: ', openResult)
  }

  onRegistered (notifData) {
    console.log('Device had been registered for push notifications!', notifData)
  }

  onIds (device) {
    console.log('Device info: ', device)
  }

  getFeaturedSlides = (novels) => {
    const featured = ['599c57d81d932f0004aa726e', '599c5ca11d932f0004aa726f', '58d81ce68f3f0e0004f4d29f']
    const entries = novels.filter(novel => featured.includes(novel._id))
    const aux = entries[1]
    entries[1] = entries[2]
    entries[2] = aux
    this.setState({
      entries
    })
  }

  goToNovelScreen = (novel) => {
    this.props.navigator.push({
      screen: 'video',
      title: novel.name,
      passProps: novel
    })
  }

  _renderSlide = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax
        parallaxProps={parallaxProps}
        clickScreen={(novel) => this.goToNovelScreen(novel)}
      />
    )
  }

  _keyExtractor = (item, index) => item._id;

  _renderItemList = ({item}) => {
    const text = (
      <View style={stylesFlat.titleContainer}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']} style={stylesFlat.gradientContainer} />
        <Text style={stylesFlat.title} numberOfLines={1}>{item.name}</Text>
      </View>
    )

    const footer = (
      <View style={stylesFlat.footerContainer}>
        <View style={stylesFlat.footerElementWrapper}>
          <Text> <Icon name='copyright' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={stylesFlat.footerText}>
            {item.author}
          </Text>
        </View>
        <View style={stylesFlat.footerElementWrapper}>
          <Text> <Icon name='translate' size={18} color='#717171' /> </Text>
          <Text numberOfLines={1} style={stylesFlat.footerText}>
            {item.translation_team}
          </Text>
        </View>
      </View>
    )

    return (
      <TouchableOpacity onPress={() => this.goToNovelScreen(item)}>
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
    const { data, loading, entries } = this.state
    const header = (
      <View style={styles.container}>
        <View style={{ flex: 0.4 }}>
          <Carousel
            data={entries}
            renderItem={this._renderSlide}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={1}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
          />
        </View>
      </View>
    )
    return (
      <View style={styles.container}>
        <If test={loading}>
          <View style={styles.spinnerView}>
            <LoadingSpinner color='blue' />
          </View>
        </If>
        <If test={!loading}>
          <FlatList
            data={data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItemList}
            ListHeaderComponent={header}
          />
        </If>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.main.info,
    novels: state.main.novels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(getInfo()),
    fetchNovels: () => dispatch(fetchNovels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScrenn)
