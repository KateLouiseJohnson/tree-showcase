import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create(
  {
    dots: {
      flexDirection: 'row',
      justifyContent:'center',
      paddingVertical: 20,
    },
    dot: {
      width: 10,
      height: 10,
      backgroundColor: 'grey',
      borderRadius: 50,
      marginHorizontal: 5,
    },
  }
)

type DotsProps = {
  index: number,
  end: number,
} 

export const Dots = ({ index, end }: DotsProps) => {
  return (
    <View style={styles.dots}>
        <View 
          style={[
            styles.dot, 
            { 
              backgroundColor: index === 0 ? 'black' : 'grey'
            }
          ]} 
        />
        {end > 1 && (
          <View 
            style={[
              styles.dot, 
              { 
                backgroundColor: index > 0 && index < end ? 'black' : 'grey'
              }
            ]} 
          />
        )}
        <View 
          style={[
            styles.dot, 
            { 
              backgroundColor: index === end ? 'black' : 'grey'
            }
          ]} 
        />
    </View>
  )
}