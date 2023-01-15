import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Store, fetchTrees } from '../state'
import { Carousel } from './Carousel'

export const CarouselContainer = () => {
  const dispatch = useDispatch()
  const {fetching, success, failure, trees} = useSelector((state: Store) => {
    return state.treeShowcase
  })

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
    return (<Carousel trees={trees} />)
  }

  return (<Text>SOMETHING WENT WRONG</Text>)
}