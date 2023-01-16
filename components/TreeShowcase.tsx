import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Store, fetchTrees } from '../state'
import { Carousel } from './Carousel'
import { Table } from './Table'

const styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: Platform.OS === 'web' ? 100 : 0,
      backgroundColor: 'blue',
    },
  }
)

export const TreeShowcase = () => {
  const dispatch = useDispatch()
  const {fetching, success, failure, trees} = useSelector((state: Store) => {
    return state.treeShowcase
  })
  const isWeb =  Platform.OS === 'web'

  useEffect(() => {
    fetchTrees(dispatch)
  }, [dispatch])

  if (fetching) {
    return (<Text>LOADING...</Text>)
  }
  
  if (failure) {
    return (<Text>FETCHING FAILED</Text>)
  }

  if(success && trees.length > 0){
    return (
      <View style={styles.container}>
        <Text>Tree Showcase</Text>
        <View>
          {isWeb && <Table trees={trees} />}
          {!isWeb && <Carousel trees={trees} />}
        </View>
      </View>
    )
  }

  return (<Text>SOMETHING WENT WRONG</Text>)
}