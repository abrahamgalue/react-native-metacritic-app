import { useColorScheme } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Main } from './components/Main'

export default function App() {
  const { colorScheme } = useColorScheme()

  return (
    <SafeAreaProvider>
      <View
        style={{
          ...styles.container,
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        }}
      >
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
})
