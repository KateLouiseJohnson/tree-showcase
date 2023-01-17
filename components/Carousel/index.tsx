import React, { useRef, useState } from 'react'
import { Tree } from '../../types'
import { Card } from '../Card'
import { FlatList, TouchableOpacity, View, ViewToken, StyleSheet, Dimensions } from 'react-native'
import { Dots } from './Dots'

const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 }

const styles = StyleSheet.create(
  {
    container: {
      paddingTop: 40,
    },
  }
)

type CarouselProps = {
  trees: Tree[]
} 

export const Carousel = ({ trees }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  let flatListRef = useRef<FlatList<Tree> | null>()
  const onViewRef = useRef(({changed}: {changed: ViewToken[]}) => {
    if (changed[0].isViewable && changed[0].index !== null) {
      setCurrentIndex(changed[0].index)
    }
  })

  const renderCarouselItems: React.FC<{item: Tree}> = ({item}) => (
    <TouchableOpacity activeOpacity={1} style={{alignSelf: 'flex-start'}} >
      <Card title={item.name} subTitle={item.species} imageUrl={item.imageUrl} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={trees} 
        renderItem={renderCarouselItems} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref
        }}
        viewabilityConfig={viewConfigRef}
        onViewableItemsChanged={onViewRef.current}
      />
      {trees.length > 0 && (<Dots index={currentIndex} end={trees.length - 1} />)}
    </View>
  )
}