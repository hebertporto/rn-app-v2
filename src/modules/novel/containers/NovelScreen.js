import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { getInfo } from '../actions/index'

import { connect } from 'react-redux'

import ListChapters from './../components/ListChapters'

class NovelScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {id: 1, number: 1, title: 'Primeiro'},
        {id: 2, number: 2, title: 'Segundo'},
        {id: 3, number: 3, title: 'Terceiro'},
        {id: 4, number: 4, title: 'Quarto'}
      ],
      novel: {
        title: 'Titulo',
        image: 'https://res.cloudinary.com/dwvrdf3zg/image/upload/v1490558181/snzbs0u5eq73osxdxfat.jpg',
        description: 'Bla Bla Bla Bla Bla'
      }
    }
  }
  render () {
    const { data, novel } = this.state
    return (
      <View>
        <ListChapters data={data} novel={novel} />
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
