import React, { Component } from 'react'

import { Text, View, FlatList } from 'react-native'

import { connect } from 'react-redux'
import navigatorStyle from './../../theme/navigationBarStyle'
import { Button } from 'nachos-ui'

import styles from './../styles/style'

import { fetchNovels } from '../../main/actions/index'

class PlayScreen extends Component {
  static navigatorStyle = navigatorStyle

  constructor (props) {
    super(props)
    this.state = {
      data: [
        {_id: 1, name: 'Carregado do State 1'},
        {_id: 2, name: 'Carregado do State 2'}
      ]
    }
    this._renderItemList = this._renderItemList.bind(this)
    this._loadData = this._loadData.bind(this)
    this._renderHeader = this._renderHeader.bind(this)
  }

  componentDidMount () {
    const { fetchNovels } = this.props
    fetchNovels()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ data: nextProps.novels })
    console.log('novels fetch', this.state.data)
  }

  _keyExtractor = (item, index) => item._id;

  _loadData () {
    this.setState({
      data: [
        {_id: 1, name: 'Troca 1'},
        {_id: 2, name: 'Troca 2'}
      ]
    })
  }

  _renderHeader () {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
        <View style={styles.buttonWrapper}>
          <Button
            kind='rounded'
            iconName='md-eye'
            iconColor='rgba(179, 177, 177, 0.8)'
            iconPosition='left'
            onPress={this._loadData}
          >
            Carregar Dados
          </Button>
        </View>
      </View>
    )
  }

  _renderItemList ({ item }) {
    return (
      <View sytle={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    )
  }

  render () {
    return (
      <FlatList
        ListHeaderComponent={this._renderHeader}
        data={this.state.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemList}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    novels: state.main.novels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNovels: () => dispatch(fetchNovels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayScreen)
