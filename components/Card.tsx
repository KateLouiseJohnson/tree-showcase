import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      height: 400,
      border: 'solid',
    }
  }
)

type CardProps = {
  title: string,
  subTitle: string,
  imageUrl: string,
}

export const Card = ({ title, subTitle, imageUrl}: CardProps) => {
  return (<View style={styles.container}>
    <Text>{title}</Text>
    <Text>{subTitle}</Text>
    <Image style={{ height: 200, width: 200 }} source={{uri: imageUrl}} />
  </View>)
}