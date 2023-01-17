import React from 'react'
import { View, Text, StyleSheet, Dimensions, } from 'react-native'
import { isMobile } from 'react-device-detect'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create(
  {
    container: {
      paddingVertical: 10,
      paddingHorizontal: isMobile === false ? 0 : 20,
      width: isMobile === false ? 200 : width,
    },
    title: {
      fontWeight: 'bold',
      fontSize: isMobile === false ? 18 : 40,
    },
    subTitle: {
      fontSize: isMobile === false ? 14 : 20,},
  }
)

type CardHeaderProps = {
  title: string,
  subTitle: string,
}
export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <Text style={styles.subTitle} >{subTitle}</Text>
    </View>
  )
}