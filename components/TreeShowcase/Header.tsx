import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      paddingVertical: 10,
      paddingLeft: 20,
    },
    text: {
      fontWeight: 'bold',
      fontSize:  24,
    }
  }
)

type HeaderProps = {
  text: string,
} 


export const Header = ({ text }: HeaderProps) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
}