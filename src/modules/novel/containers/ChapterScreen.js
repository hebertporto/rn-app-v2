import React, { Component } from 'react'

import { Text, View, ScrollView } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'
import navigatorStyle from './../../theme/navigationBarStyle'
import styles from './../styles/chapterScreen.style'

import Icon from 'react-native-vector-icons/MaterialIcons'

class ChapterScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const novelName = 'Tales of Gods and Demons'
    const title = '1 - Ataque Total Sinitro'

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.viewHeaderStyle}>
            <Text numberOfLines={1} style={styles.titleStyle}> {novelName} </Text>
            <Text style={styles.subTitleStyle}>{title}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.viewStyle}>
            <View style={styles.viewContainerText}>
              <Text style={styles.iconStyle}>
                <Icon name='closed-caption' size={18} color='#717171' />
              </Text>
              <Text numberOfLines={1} style={styles.textStyleHeader}> Paçoca </Text>
            </View>
            <View style={styles.viewContainerText}>
              <Text style={styles.iconStyle}>
                <Icon name='spellcheck' size={18} color='#717171' />
              </Text>
              <Text numberOfLines={1} style={styles.textStyleHeader}> João </Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View>
            <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus sagittis libero, ut porttitor magna venenatis in. Pellentesque suscipit sit amet eros id tincidunt. Proin placerat, nulla nec efficitur viverra, turpis quam viverra massa, vitae malesuada lectus erat vitae neque. Etiam dignissim at quam vel iaculis. Donec maximus pretium lacus vel efficitur. Aenean feugiat sollicitudin lobortis. Vivamus eget blandit tortor. Donec sit amet ante neque. Mauris ac metus eu nibh aliquam elementum eu facilisis est. Nam fringilla malesuada est, at eleifend justo consectetur sit amet. Duis ut turpis sed augue feugiat elementum ut ac libero. Phasellus lacinia enim at lacus posuere consectetur. Pellentesque at eros eu tortor tempor ultricies. Nullam ante mauris, vehicula quis porttitor vel, convallis id nulla. Aliquam at consequat neque. In vel ex a ex tincidunt cursus id at mauris.

Donec aliquet varius tristique. Cras neque nisi, aliquam a turpis dictum, iaculis condimentum elit. Cras vitae dolor tristique, blandit purus non, semper odio. Proin ac tempor ipsum. Sed ut facilisis est, quis placerat orci. Vestibulum posuere feugiat posuere. Maecenas euismod maximus dui eu tincidunt. Mauris sollicitudin sodales fermentum. Proin volutpat nibh tincidunt, feugiat turpis nec, ultricies purus. Phasellus sagittis turpis ac ipsum ultricies, sit amet venenatis leo ultricies. In at vehicula augue. Morbi consectetur nunc sit amet rhoncus aliquam. In eget nunc non enim congue congue vestibulum eget nisl. Nulla facilisi.

Integer eget purus at leo consectetur sodales sit amet eget nisi. Donec non ornare est, sagittis varius purus. Nulla facilisis posuere massa, ac pretium purus pellentesque non. Donec in magna blandit augue varius ornare. Nulla lacinia at leo vel rutrum. Quisque molestie nunc at pretium vulputate. Aenean in maximus odio, sit amet scelerisque elit.

Fusce ut mi at massa condimentum venenatis. Cras convallis mi ut diam accumsan, dictum vulputate felis tincidunt. Aenean auctor, magna sit amet lobortis sodales, ante mauris imperdiet augue, sed lacinia urna turpis vitae purus. Vestibulum eu ornare metus. Fusce fermentum tortor vitae quam consequat, in vulputate velit porttitor. Praesent ac commodo enim. Etiam volutpat lectus id lorem convallis ultricies. Ut eu lectus vitae tortor imperdiet molestie vel commodo justo. Curabitur nisi mi, tristique eu nulla mollis, fringilla porta diam. Donec ac nunc aliquam erat euismod feugiat ac id lorem. Sed congue, mauris eget suscipit ultrices, nulla magna vehicula lorem, in cursus odio purus pharetra nibh. Suspendisse luctus leo sed massa maximus, ut ornare magna facilisis. Vestibulum porta mattis nisi, vitae sodales ex auctor ut. Suspendisse aliquam, nulla vitae scelerisque pretium, tellus odio suscipit velit, quis accumsan elit magna sit amet odio. Donec consequat accumsan diam sit amet gravida.
            </Text>
            <View style={{ height: 70 }} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    info: state.main.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(getInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen)
