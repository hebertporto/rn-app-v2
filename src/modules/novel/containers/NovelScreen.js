import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'

import navigatorStyle from './../../theme/navigationBarStyle'

import ListChapters from './../components/ListChapters'

class NovelScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
      data: [
        {id: 1, number: 1, title: 'Primeiro'},
        {id: 2, number: 2, title: 'Segundo'},
        {id: 3, number: 3, title: 'Terceiro'},
        {id: 6, number: 4, title: 'Quarto'},
        {id: 7, number: 4, title: 'Quarto'},
        {id: 8, number: 4, title: 'Quarto'},
        {id: 9, number: 4, title: 'Quarto'},
        {id: 10, number: 4, title: 'Quarto'}
      ],
      novel: {
        title: 'Tales of Demons and Gods',
        image: 'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg',
        description: 'Bla Bla Bla Bla Bla'
      }
    }
    this.goToChapterScreen = this.goToChapterScreen.bind(this)
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
    console.log('props', this.props)
  }

  goToChapterScreen (chapter) {
    this.props.navigator.push({
      screen: 'chapter',
      title: 'Chapter Screen'
    })
  }

  render () {
    const { data, novel } = this.state
    return (
      <View>
        <ListChapters data={data} novel={novel} clickScreen={this.goToChapterScreen} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NovelScreen)
