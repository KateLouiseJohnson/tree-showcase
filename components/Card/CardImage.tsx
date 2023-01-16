import React from 'react'
import { Image, StyleSheet, Platform, Dimensions } from 'react-native'
import { getBlurSettings } from '../../utils/getBlurSetting'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create(
  {
    image: {
      width: Platform.OS === 'web' ? 200 : width,
      height: Platform.OS === 'web' ? 200 : width,
      resizeMode: 'cover',
    },
  }
)

type CardImageProps = {
  imageUrl: string,
  isImageHidden: boolean,
}

export const CardImage = ({  imageUrl, isImageHidden}: CardImageProps) => {
  // Native requires a higher setting for blur
  const blurSetting = getBlurSettings(Platform.OS)

  return (
  <Image 
    style={styles.image} 
    blurRadius={isImageHidden ? blurSetting : 0} 
    source={{uri: imageUrl}} 
  />
  )
}