import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Store, fetchTrees } from '../../state'
import { Carousel } from '../Carousel'
import { Table } from '../Table'
import { Header } from './Header'

const styles = StyleSheet.create(
  {
    container: {
      ...Platform.select({
        web:{
          marginHorizontal: 20,
        }
      })
    },
  }
)

export const TreeShowcase = () => {
  const dispatch = useDispatch()
  const {fetching, success, failure, trees} = useSelector((state: Store) => {
    return state.treeShowcase
  })
  const isWeb =  Platform.OS === 'web'  // TODO: Play around with scope for this

  useEffect(() => {
    fetchTrees(dispatch)
  }, [dispatch])

  if (fetching) {
    // Ideally create some super awesome loading graphic
    return (<Text>LOADING...</Text>)
  }
  
  if (failure) {
    // Ideally create some super awesome fail screen
    return (<Text>FETCHING FAILED</Text>)
  }

  if(success && trees.length > 0){
    return (
      <View style={styles.container}>
        {isWeb && <Header text={'Tree Showcase'} />}
        {isWeb && <Table trees={trees} />}
        {!isWeb && <Carousel trees={trees} />}
      </View>
    )
  }

  // Ideally create some nice error/fallback screen
  return (<Text>SOMETHING WENT WRONG</Text>)
}