import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { TreeShowcase } from './components'
import { Provider } from 'react-redux'
import { store } from './state'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
})

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <TreeShowcase />
          <StatusBar style="auto" />
        </View>
    </Provider>
  )
}
