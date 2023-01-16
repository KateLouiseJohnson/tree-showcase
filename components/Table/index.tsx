import React from 'react'
import { Tree } from '../../types'
import { Card } from '../Card'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 'auto',
      // Temp, remove after
      border: 'dotted',
      backgroundColor: 'green',
    }
  }
)

type TableProps = {
  trees: Tree[]
} 

export const Table = ({ trees }: TableProps) => {
  return (<View style={styles.container}>
    {trees.map((tree, i) => (<Card key={i} title={tree.name} subTitle={tree.species} imageUrl={tree.imageUrl} />))}
  </View>)
}