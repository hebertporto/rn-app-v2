import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { Button, Card } from 'nachos-ui'

import { getInfo } from '../actions/index';

import { connect } from 'react-redux';

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
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
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
            <Text style={styles.title}>{ item.title }</Text>
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


  render() {
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
    const sliderWidth = viewportWidth;
    const itemWidth = viewportHeight;

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4}}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
        </View>
        <View style={{ flex: 0.6}}>
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
