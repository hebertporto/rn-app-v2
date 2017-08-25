import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import { getInfo } from '../actions/index';

import { connect } from 'react-redux';

class MainScrenn extends Component {

  static navigatorStyle = {
    navBarTextColor: '#FFFFFF',
    navBarComponentAlignment: 'center',
    navBarBackgroundColor: '#4C79E8',
    topBarBorderWidth: 5.5,
  };

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

  componentWillMount() {
    // this.props.getInfo()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> App Iniciado</Text>
        <Text>{this.props.info}</Text>
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
