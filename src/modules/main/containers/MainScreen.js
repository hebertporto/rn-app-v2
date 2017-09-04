import React, {Component} from 'react'

import {
  View,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel'
import { getInfo, fetchNovels } from '../actions/index'
import { connect } from 'react-redux'
import SliderEntry from './../components/SlideEntry'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Card } from 'nachos-ui'
import _ from 'lodash'
import If from './../../shared/If'
import LoadingSpinner from './../../shared/LoadingSpinner'
import navigatorStyle from './../../theme/navigationBarStyle'
import styles, { sliderWidth, itemWidth } from './../styles/style'

import stylesFlat, { customCardTheme } from './../styles/ListNovels.style'

// import SplashScreen from 'react-native-splash-screen'

class MainScrenn extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
      entries: [],
      data: [],
      loading: true,
      slider1ActiveSlide: 1
    }
    this.goToNovelScreen = this.goToNovelScreen.bind(this)
    this._renderItemWithParallax = this._renderItemWithParallax.bind(this)
    this._renderItemList = this._renderItemList.bind(this)
  }

  componentDidMount () {
    const { fetchNovels } = this.props
    fetchNovels()
    // SplashScreen.hide()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.novels,
      loading: false,
      entries: _.shuffle(nextProps.novels).slice(0, 3)
    })
  }

  goToNovelScreen (novel) {
    this.props.navigator.push({
      screen: 'novel',
      title: novel.name,
      passProps: novel
    })
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
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

  _renderItemList ({item}) {
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
    const { data, loading } = this.state
    const header = (
      <View style={styles.container}>
        <View style={{ flex: 0.4 }}>
          <Carousel
            data={this.state.entries}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.6}
            enableMomentum
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
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
            ListHeaderComponent={header}
            data={data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItemList}
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
