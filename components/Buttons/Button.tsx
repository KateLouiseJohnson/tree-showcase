import React, { useState } from 'react'
import { Button as ReactButton, StyleSheet} from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
    }
  }
)

type ButtonProps = {
  isShowRevealText: boolean
  onPress: () => void
}

export const Button = ({ isShowRevealText, onPress }: ButtonProps) => {
  const revealText = 'Reveal'
  const hideText = 'Hide'
  const [showRevealText, setShowRevealText] = useState(isShowRevealText)
  const onButtonPress = () => {
    onPress()
    setShowRevealText(!isShowRevealText)
  }

  return (<ReactButton color={'#000000'} title={showRevealText ? revealText : hideText} onPress={onButtonPress} accessibilityLabel={'Press this button to reveal the image'}/>)
}