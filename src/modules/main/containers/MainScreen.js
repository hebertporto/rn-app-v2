import React, {Component} from 'react';


import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

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
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> App Iniciado</Text>
      </View>
    );
  }
}

export default MainScrenn;
