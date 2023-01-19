import React, { useState } from 'react'
import {View, StyleSheet } from 'react-native'
import { Button } from '../Buttons'
import { CardHeader } from './CardHeader'
import { CardImage } from './CardImage'
import { isMobile } from 'react-device-detect'

const styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: isMobile === false ? 20 : 0, // Specifically detect for false as android appears not to work
      paddingBottom: isMobile === false ? 10 : 0,
    },
    button: {
      backgroundColor: '#000000',
    }
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
    <View nativeID={'card'} style={styles.container}>
      <CardHeader title={title} subTitle={subTitle} />
      <CardImage imageUrl={imageUrl} isImageHidden={isImageHidden} />
      <View style={styles.button}>
        <Button isShowRevealText={isImageHidden} onPress={onButtonPress} />
      </View>
    </View>
  )
}