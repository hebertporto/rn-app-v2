import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  Platform
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button, Card } from 'nachos-ui'

import { getInfo } from '../actions/index';

import { connect } from 'react-redux';

import SliderEntry from './../components/SlideEntry'
import ListNovels from './../components/ListNovels'

import styles, { colors, sliderWidth, itemWidth } from './../styles/style';

class MainScrenn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'http://lorempixel.com/600/400/'
        },
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum t',
            illustration: 'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg'
        },
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolo ',
            illustration: 'http://i.imgur.com/MABUbpDl.jpg'
      }],
      data: [
        { id: 1, text: 'The avocado is a tree that is native to Mexico', image:'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg' },
        { id: 2, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 3, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
        { id: 4, text: 'The avocado is a tree that is native to Mexico', image:'https://upx.cz/BsN' },
      ],
      slider1ActiveSlide: 1
    }
  }

  componentWillMount() {
    // this.props.getInfo()
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
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4}}>
          <Carousel
            data={this.state.entries}
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
            dotsLength={this.state.entries.length}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={{ flex: 0.6 }}>
          <ListNovels data={data} />
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
