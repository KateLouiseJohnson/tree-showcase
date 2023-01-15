import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { CarouselContainer } from './components'
import { Provider } from 'react-redux'
import { store } from './state'

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Text>Tree Showcase</Text>
          <CarouselContainer />
          <StatusBar style="auto" />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
