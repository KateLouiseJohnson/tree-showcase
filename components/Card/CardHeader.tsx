import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
    },
  }
)

type CardHeaderProps = {
  title: string,
  subTitle: string,
}
export const CardHeader = ({ title, subTitle }: CardHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  )
}