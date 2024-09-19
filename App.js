import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Main } from './components/Main'
import { useColorScheme } from 'nativewind'

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
})
