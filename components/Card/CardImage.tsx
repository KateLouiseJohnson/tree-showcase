import React, { useState } from 'react'
import { Image, Text, StyleSheet, Platform, Dimensions, View } from 'react-native'
import { getBlurSettings } from '../../utils/getBlurSetting'
import { isMobile } from 'react-device-detect'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create(
  {
    image: {
      width: isMobile=== false ? 200 : width,
      height: isMobile=== false ? 200 : width,
      resizeMode: 'cover',
    },
    broken: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
)

type CardImageProps = {
  imageUrl: string,
  isImageHidden: boolean,
}

export const CardImage = ({  imageUrl, isImageHidden}: CardImageProps) => {
  // Native requires a higher setting for blur
  const blurSetting = getBlurSettings(Platform.OS)
  const [isBroken, setIsBroken] = useState(false)

  return (<>
    {isBroken && 
      <View style={[styles.image, styles.broken]}>
        <Text>Image missing</Text>
      </View>
    }
    {!isBroken && <Image 
      nativeID='image'
      style={styles.image} 
      blurRadius={isImageHidden ? blurSetting : 0} 
      source={{uri: imageUrl}} 
      onError={() => {
        // Adding button disabling here would be good
        setIsBroken(true)
      }}
    />}
  </>
  )
}