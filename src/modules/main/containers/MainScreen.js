import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button, Card } from 'nachos-ui'

import { getInfo } from '../actions/index';

import { connect } from 'react-redux';
import SlideEntry from './../components/SlideEntry'

import styles, { colors } from './../styles/style';

class MainScrenn extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        buttonFontSize: 14,
        buttonFontWeight: '800',
        buttonColor: 'white',
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'http://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'http://i.imgur.com/MABUbpDl.jpg'
      },
      {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'http://i.imgur.com/MABUbpDl.jpg'
      }],
      data: [
        { id: 1, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 2, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 3, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 4, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
      ]
    }
  }

  componentWillMount() {
    // this.props.getInfo()
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
          <Image
            style={styles.imageContainer}
            source={{ uri: item.illustration }}
          />
        </View>
    );
  }

  _keyExtractor = (item, index) => item.id;

  _renderItemList({item}) {
    return (
      <Card
        footerContent={item.text}
        image={item.image}
        style={{
          margin: 8,
          elevation: 2,
          shadowColor: '#0000001E',
          shadowOpacity: 0.26,
          shadowOffset: { height: 1, width: 0 },
          shadowRadius: 1,
          }}
      />
    )
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const sliderWidth = viewportWidth;
    const itemWidth = viewportWidth;

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.3}}>
          <Carousel
            data={ENTRIES1}
            renderItem={this._renderItemWithParallax}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            hasParallaxImages={true}
            firstItem={1}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.6}
            enableMomentum={false}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          />
          <Pagination
            dotsLength={ENTRIES1.length}
            activeDotIndex={slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={{ flex: 0.7}}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItemList}
          />
        </View>
      </View>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    info: state.main.info
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(getInfo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScrenn);
