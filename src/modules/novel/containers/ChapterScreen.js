import React, { Component } from 'react'

import { Text, View, ScrollView } from 'react-native'

import { fetchChapterById } from '../../main/actions/index'

import { connect } from 'react-redux'
import navigatorStyle from './../../theme/navigationBarStyle'
import styles from './../styles/chapterScreen.style'
import If from './../../shared/If'
import LoadingSpinner from './../../shared/LoadingSpinner'
import Icon from 'react-native-vector-icons/MaterialIcons'

class ChapterScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
      content: '',
      _id: '',
      number: '',
      title: '',
      revisors: '',
      translators: '',
      loading: true
    }
  }

  componentDidMount () {
    const { fetchChapterById, chapterId } = this.props
    fetchChapterById(chapterId)
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps)
    const { content, number, title, revisors, translators, _id } = nextProps.chapter
    this.setState({
      content,
      number,
      title,
      revisors,
      translators,
      _id,
      loading: false
    })
  }

  render () {
    const novelName = this.props.novelName
    const { title, content, number, revisors, translators, loading } = this.state

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.viewHeaderStyle}>
            <Text numberOfLines={1} style={styles.titleStyle}> {novelName} </Text>
            <Text style={styles.subTitleStyle}>{`${number} - ${title}`}</Text>
          </View>
          <View style={styles.divider} />
          <If test={loading}>
            <LoadingSpinner color='blue' />
          </If>
          <If test={!loading}>
            <View>
            <View style={styles.viewStyle}>
              <View style={styles.viewContainerText}>
                <Text style={styles.iconStyle}>
                  <Icon name='closed-caption' size={18} color='#717171' />
                </Text>
                <Text numberOfLines={1} style={styles.textStyleHeader}> {translators} </Text>
              </View>
              <View style={styles.viewContainerText}>
                <Text style={styles.iconStyle}>
                  <Icon name='spellcheck' size={18} color='#717171' />
                </Text>
                <Text numberOfLines={1} style={styles.textStyleHeader}> {revisors} </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={styles.textStyle}>
                {content}
              </Text>
              <View style={{ height: 70 }} />
            </View>
            </View>
          </If>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chapter: state.main.chapter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChapterById: (id) => dispatch(fetchChapterById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterScreen)
