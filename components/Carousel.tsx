import React from 'react'
import { Tree } from '../types'
import { Card } from './Card'
import {View} from 'react-native'

type CarouselProps = {
  trees: Tree[]
} 

export const Carousel = ({ trees }: CarouselProps) => {
  return (<View>
    {trees.map((tree, i) => (<Card key={i} title={tree.name} subTitle={tree.species} imageUrl={tree.imageUrl} />))}
  </View>)
}