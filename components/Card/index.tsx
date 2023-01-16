import React, { useState } from 'react'
import {View, StyleSheet } from 'react-native'
import { Button } from '../Buttons'
import { CardHeader } from './CardHeader'
import { CardImage } from './CardImage'

const styles = StyleSheet.create(
  {
    container: {
      // Temp, remove after
      border: 'dashed',
    },
  }
)

export type CardProps = {
  title: string,
  subTitle: string,
  imageUrl: string,
}

export const Card = ({ title, subTitle, imageUrl}: CardProps) => {
  const [isImageHidden, setIsImageHidden] = useState(true)
  const onButtonPress = () => {
    // Some funky flash happening on first click on native, needs debugging
    setIsImageHidden(!isImageHidden)
  }

  return (
    <View style={styles.container}>
      <CardHeader title={title} subTitle={subTitle} />
      <CardImage imageUrl={imageUrl} isImageHidden={isImageHidden} />
      <View>
        <Button isShowRevealText={isImageHidden} onPress={onButtonPress} />
      </View>
    </View>
  )
}